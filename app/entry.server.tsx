import {
  createReadableStreamFromReadable,
  type EntryContext,
} from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import {
  AvailableLanguageTag,
  isAvailableLanguageTag,
  setLanguageTag,
  sourceLanguageTag,
} from "lang/gen/runtime";

import { renderToPipeableStream } from "react-dom/server";
import ssrPrepass from "react-ssr-prepass";
import { PassThrough } from "stream";
import {
  cacheExchange,
  Client,
  fetchExchange,
  Provider as GqlProvider,
  ssrExchange,
} from "urql";
import { authenticator } from "./auth.server";

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  const cookie = Object.fromEntries(
    request.headers
      .get("Cookie")
      ?.replaceAll("; ", ";")
      .split(";")
      .map((cookie) => cookie.split("=")) ?? [],
    // ) as { lang?: AvailableLanguageTag };
  ) as {
    lang?: AvailableLanguageTag;
    locale?: string;
    scope?: `${string}:${string}`;
  };

  const lang =
    cookie.lang ||
    request.headers
      .get("Accept-Language")
      ?.split(",")
      .map((l) => l.slice(0, 2))
      .find(isAvailableLanguageTag) ||
    sourceLanguageTag;
  setLanguageTag(lang);

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    let didError = false;
    let shellRendered = false;

    const user = await authenticator.isAuthenticated(request);
    const Authorization = user?.id_token ? `Bearer ${user?.id_token}` : "";

    const ssr = ssrExchange();

    const gqlClient = new Client({
      // url: `http://localhost:${process.env.PORT || "3000"}/graphql`,
      url: process.env.SERVER_URL_SSR || process.env.SERVER_URL!,
      exchanges: [cacheExchange, ssr, fetchExchange],
      fetchSubscriptions: true,
      fetchOptions: {
        headers: {
          Authorization,
          scope: `${process.env.ORG_ID}:${process.env.ETB_ID}`,
        },
      },
      requestPolicy: "network-only",
      suspense: true, // await the server to return results ( without this, the extracted data using "ssr.extractData()" will always be empty )
    });

    const app = (
      <GqlProvider value={gqlClient}>
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </GqlProvider>
    );
    await ssrPrepass(app);

    const ssrGqlData = ssr.extractData();

    const { pipe, abort } = renderToPipeableStream(
      <>
        {app}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__GQL_STATE__=${JSON.stringify({
              ...ssrGqlData,
              idToken: user?.id_token,
              serverUrl: process.env.SERVER_URL,
              scope: `${process.env.ORG_ID}:${process.env.ETB_ID}`,
            }).replace(/</g, "\\u003c")}`, // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
          }}
        />
      </>,
      {
        [callbackName]: async () => {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");
          console.log("set-cookie", lang);

          responseHeaders.set(
            "Set-Cookie",
            `lang=${lang}; Path=/; SameSite=Lax`,
          );
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
