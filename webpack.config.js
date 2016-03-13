module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    devtools: 'source-map',
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
