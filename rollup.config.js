import babel from "rollup-plugin-babel";
import babelrc from "babelrc-rollup";
import resolve from "rollup-plugin-node-resolve";

export default {
  entry: "index.js",
  dest: "dist/index.js",
  format: "cjs",
  plugins: [
    resolve({
      modulesOnly: true
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      babelrc: true
    })
  ],
  external: ["axios"]
};
