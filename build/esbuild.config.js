import esbuildServe from "esbuild-serve";

esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/yith.tsx"],
        bundle: true,
        sourcemap: true,
        outfile: "public/bundle.js",
    },
    {
        port: 8001,
        root: "public"
    }
);
import defineConfig } from "esbuild-serve";

export default defineConfig({
    serve: {},
    build: {},
});