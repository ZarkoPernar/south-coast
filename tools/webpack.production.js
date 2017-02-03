var path = require('path')
var OfflinePlugin = require('offline-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var CONFIG = require('./config')


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    CONFIG.APP_PATH + CONFIG.CLIENT_APP_PATH + CONFIG.CLIENT_ENTRY_FILE
  ],
  output: {
    path: CONFIG.CLIENT_OUTPUT_PATH,
    filename: 'bundle-[hash].js',
  },
  devServer: CONFIG.WEBPACK_DEV_SERVER_CONFIG,
  plugins: [
    new HtmlWebpackPlugin(CONFIG.HtmlWebpackPlugin),
    new ExtractTextPlugin('styles.css'),
    // new OfflinePlugin({
    //   caches: 'all',
    //   externals: ['./index.html']
    // }),
  ],
  module: {
    rules: [      
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.resolve('app'),
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
      }, {
        test: /\.css$/,
        // loaders: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  }
}