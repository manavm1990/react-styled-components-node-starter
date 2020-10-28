module.exports = {
  target: "node",

  // TODO: Handle 'production' mode
  mode: "development",
  entry: "./src/index.js",

  // 'Absolute imports'
  modules: ["src", "node_modules"],
};
