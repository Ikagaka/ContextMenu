let config = require("./webpack.config.js");
config.entry = "./src/test.ts";
config.output.filename = "./lib/test.js";
config.externals["QUnit"] = "qunitjs";
config.module.loaders.unshift({ test: /test\.tsx?$/, loader: "webpack-espower-loader!babel-loader!ts-loader" });

module.exports = config;
