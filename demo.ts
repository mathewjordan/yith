/**
 * Live Reloading MVP:
 * https://github.com/zaydek/esbuild-hot-reload/blob/master/serve.js
 */

const { build } = require("esbuild");

build({
  bundle: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  logLevel: "info",
  platform: "node",
  entryPoints: ["src/dev.tsx"],
  minify: false,
  outfile: "public/script.js",
});
