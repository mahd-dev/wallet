import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? undefined
    : await import("vite").then((vite) =>
      vite.createServer({
        server: { middlewareMode: true },
      })
    );

const remixHandler = createRequestHandler({
  build: viteDevServer
    ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
    : await import("./build/server/index.js"),
});

const apiBuild = viteDevServer
  ? await import("./api/server.ts")
  : await import("./build/api/index.js");

const app = express();
app.use(compression());
app.disable("x-powered-by");

if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1m" })
  );
  app.use(express.static("build/client", { maxAge: "1h" }));
}
app.use(morgan("tiny"));

app.use(apiBuild?.default || apiBuild);

app.all("*", remixHandler);

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`App listening on http://0.0.0.0:${port}`);
});
