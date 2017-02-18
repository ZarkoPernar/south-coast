var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var CONFIG = require('./config')


module.exports = {
  devtool: 'eval-source-map',
  entry: [
    CONFIG.APP_PATH + CONFIG.CLIENT_APP_PATH + CONFIG.CLIENT_ENTRY_FILE,
  ],
  output: {
    path: CONFIG.CLIENT_OUTPUT_PATH,
    filename: 'bundle.js',
  },
  devServer: CONFIG.WEBPACK_DEV_SERVER_CONFIG,
  plugins: [
    new HtmlWebpackPlugin(CONFIG.HtmlWebpackPlugin),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js',
    //   minChunks: 2,
    // }),

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.resolve('app/client'),
          // path.resolve('node_modules/preact-compat/src'),
        ],
        exclude: ['.spec.']

      }, {
        test: /\.scss$/,
        // loaders: ['style-loader', 'css-loader', 'sass-loader'],
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
        
      }, 
      {
        test: /\.css$/,
        // loaders: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          'image-webpack-loader',
        ]
      },
    ]
  },
}