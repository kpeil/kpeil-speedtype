module.exports = {
  devServer: {
    port: 3000,
    contentBase: "./html"
  },
  entry: './js/main.js',
  output: {
    filename: './js-bundle/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: 'es2015',
        },
      }
    ]
  },
};
