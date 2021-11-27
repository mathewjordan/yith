// https://github.com/souporserious/bundling-typescript-with-esbuild-for-npm

const { build } = require("esbuild");
const { peerDependencies } = require("./package.json");

const entryPoints = ["src/index.tsx"];

const shared = {
  bundle: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  platform: "node",
  logLevel: "info",
  entryPoints,
  minify: false,
  sourcemap: true,
};

build({
  ...shared,
  entryPoints: ["src/dom.tsx"],
  outfile: "./dist/yith.js",
  minify: process.env.NODE_ENV === "production",
});

build({
  ...shared,
  external: ["react", "react-dom", "mirador"],
  format: "cjs",
  outfile: "./dist/index.cjs.js",
});

build({
  ...shared,
  external: ["react", "react-dom", "mirador"],
  format: "esm",
  outfile: "./dist/index.esm.js",
});
