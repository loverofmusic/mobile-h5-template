const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const argv = require('yargs').argv;
console.log(argv.myenv, argv.env)
const modeFlag = argv.env === "production" ? true : false

module.exports = {

    entry: {
        index: resolve(__dirname, '../src/main.js')
        // jquery: 'jquery'//多入口方式
    },

    output: {
        // filename: 'bundle.js',
        filename: '[name].[hash:8].js',
        path: resolve(__dirname, '../dist'),
        // publicPath: 'http://cdn.xxx.com/assets/'
        publicPath: '/',
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: modeFlag ? '[name].[contenthash:8].[ext]' : '[name].[hash:8].[ext]',
                        outputPath: 'assets/images/',
                        limit: 2048,
                    },
                },
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'assets/fonts/',
                    },
                },
            },

            {
                test: /\.m?js$/,
                loader: 'babel-loader',

                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        splitChunks: {
            //抽取公共代码
            chunks: "all", //async all initial
            // chunks: 'async',
            minSize: 30000,
            // name: false,
            // minRemainingSize: 0,
            // maxSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 6,
            // maxInitialRequests: 4,
            // automaticNameDelimiter: '~',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    // filename: 'jquery.js'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    // filename: 'common.js'

                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: true,
            title: 'my App',
            favicon: resolve('public/favicon.ico')
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ]
};
