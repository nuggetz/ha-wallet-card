import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/ha-wallet-card.js",
    format: "es",
    inlineDynamicImports: true,
    sourcemap: dev,
  },
  plugins: [
    resolve(),
    json(),
    typescript({ tsconfig: "./tsconfig.json" }),
    !dev && terser({ format: { comments: false } }),
  ],
  // Bundle everything (Lit, helpers) into a single self-contained file so the
  // card works as a HACS plugin resource with no external imports.
  onwarn(warning, warn) {
    if (warning.code === "THIS_IS_UNDEFINED") return;
    warn(warning);
  },
};
