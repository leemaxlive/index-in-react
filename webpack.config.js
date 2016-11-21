var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins = [];
plugins.push(new ExtractTextPlugin('[name].css'));

module.exports = {
    plugins:plugins,
    entry:{
        app:'./src/app'
    },
    output: {
        path:__dirname+"/build",
        filename: '[name].js'
    },
    resolve: {
        extensions: ['','.js','.ts','.tsx']
    },
    module: {
        loaders: [
            { 
                test: /\.tsx?$/, 
                loader: 'babel?presets[]=es2015,presets[]=react!ts' 
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
            },
            { 
                test: /\.(png|jpg)$/, 
                loader: 'url?limit=20000&name=[name].[ext]' 
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file?name=[name].[ext]' 
            }
        ]
    },
    devtool:'sourcemap'
}