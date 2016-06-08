var path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './lib/index.js'
  },
  resolve: {
    root: [path.join(__dirname,'node_modules')],
    extensions: [
      '', '.webpack.js', '.web.js',
      '.ts', '.tsx', '.js'
    ]
  },
  externals: {
    'jquery': 'jQuery'
  },
  module: {
    loaders: [
      { test: /[^(?:test)]\.tsx?$/, loader: "babel-loader!ts-loader" }
    ]
  },
  ts: {
    configFileName: "./tsconfig.json"
  }
};




