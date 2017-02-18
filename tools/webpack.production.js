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
    filename: 'bundle-[chunkhash].js',
  },
  devServer: CONFIG.WEBPACK_DEV_SERVER_CONFIG,
  plugins: [
    new ExtractTextPlugin('styles.[chunkhash].css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js',
    //   minChunks: 2,
    // }),
    new HtmlWebpackPlugin(Object.assign({}, CONFIG.HtmlWebpackPlugin, {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    })),
    // fucking bullshit
    // new OfflinePlugin({
    //   relativePaths: false,
    //   autoUpdate: true,
    //   publicPath: '/',
    //   main: [':rest:'],
    //   // externals: ['./index.html'] causes issues with updating the service worker
    //   AppCache: false,
    //   ServiceWorker: {
    //     events: true
    //   }
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
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
    ]
  }
}