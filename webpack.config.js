module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(t|j)sx?$/,
      loader: ['awesome-typescript-loader?module=es6'],
      exclude: [/node_modules/]
    }, {
      test: /\.js$/,
      loader: 'source-map-loader',
      enforce: 'pre'
    }]
  }
}