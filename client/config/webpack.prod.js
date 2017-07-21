const path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/assets/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js',
        library: 'hello-webassembly',
        libraryTarget: 'umd',
    },
    externals: [
        {
            "window": "window"
        }
    ],

    plugins: [
        // new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': '"production"'
            }
        })
    ]
});