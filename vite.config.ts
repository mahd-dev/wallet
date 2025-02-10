import { paraglide } from "@inlang/paraglide-js-adapter-vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { remixPWA } from "@remix-pwa/dev";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    remixPWA(),
    paraglide({
      project: "./project.inlang",
      outdir: "./lang/gen",
    }),
  ],
  // server: {
  //   host: true,
  //   port: 3000,
  // },
  ssr: {
    noExternal: ["remix-i18next"],
  },
  define: { _global: {} },
});
