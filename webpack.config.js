var path = require("path");
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "?presets[]=es2015"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};
