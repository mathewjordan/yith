// https://github.com/souporserious/bundling-typescript-with-esbuild-for-npm

const { build } = require("esbuild");
const { peerDependencies } = require("./package.json");

const entryFile = "src/index.tsx";

const shared = {
  bundle: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  platform: "node",
  logLevel: "info",
  entryPoints: [entryFile],
  minify: false,
  sourcemap: true,
};

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/yith.js",
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
