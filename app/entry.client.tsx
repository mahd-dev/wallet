import { RemixBrowser } from "@remix-run/react";
import { setLanguageTag } from "lang/gen/runtime";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import { createClient as createWSClient } from "graphql-ws";
import {
  cacheExchange,
  Client,
  fetchExchange,
  Provider as GqlProvider,
  ssrExchange,
  subscriptionExchange,
} from "urql";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms?: string[];
  readonly userChoice?: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt?(): Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

window.addEventListener(
  "beforeinstallprompt",
  async (event: BeforeInstallPromptEvent) => {
    console.log(event);

    if (!event.prompt) return;

    event.preventDefault();

    const relatedApps: { id: string; name: string; version: string }[] =
      await (navigator.getInstalledRelatedApps
        ? navigator.getInstalledRelatedApps()
        : []);
    if (relatedApps.some((r) => r.id === "live.mahd")) return;

    await event.prompt();
  },
);

async function hydrate() {
  const Authorization = window.__GQL_STATE__.idToken
    ? `Bearer ${window.__GQL_STATE__.idToken}`
    : "";

  const wsGqlClient = createWSClient({
    url: `${window.location.origin}/graphql`.replace(/^http/, "ws"),
    connectionParams: {
      Authorization,
    },
  });

  const gqlClient = new Client({
    url: `${window.location.origin}/graphql`,
    exchanges: [
      cacheExchange,
      ssrExchange({
        isClient: true,
        initialState: window.__GQL_STATE__,
      }),
      fetchExchange,
      subscriptionExchange({
        forwardSubscription(request) {
          const input = { ...request, query: request.query || "" };
          return {
            subscribe(sink) {
              const unsubscribe = wsGqlClient.subscribe(input, sink);
              return { unsubscribe };
            },
          };
        },
      }),
    ],
    fetchOptions: { headers: { Authorization } },
    requestPolicy: "cache-and-network",
  });

  startTransition(() => {
    setLanguageTag(
      Object.fromEntries(
        document.cookie
          .replaceAll("; ", ";")
          .split(";")
          .map((cookie) => cookie.split("=")) ?? [],
      ).lang || navigator.language.slice(0, 2),
    );

    hydrateRoot(
      document,
      <GqlProvider value={gqlClient}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </GqlProvider>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
