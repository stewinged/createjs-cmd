var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        "createjs": ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
