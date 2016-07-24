
module.exports = {
  entry: './app/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
}
