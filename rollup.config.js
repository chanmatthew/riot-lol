import babel from "rollup-plugin-babel";
import babelrc from "babelrc-rollup";

export default {
  entry: "index.js",
  dest: "dist/index.js",
  format: "cjs",
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      babelrc: true
    })
  ],
  external: ["axios"]
};
