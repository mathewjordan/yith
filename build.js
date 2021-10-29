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
  external: ["react", "react-dom"],
  platform: "node",
  logLevel: "info",
  entryPoints: ["src/docs.tsx"],
  minify: false,
  sourcemap: true,
};

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
});

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
});
