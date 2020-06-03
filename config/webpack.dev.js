const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const { join } = require('path');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: join(__dirname, 'dist'), //服务访问目录
    port: 9000,
    host: '192.168.124.29',
    // proxy: {
    //     '/api': 'localhost:8888'
    // }
    hot: true, //hmr 必须开启此项
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'px2rem-loader',
            // options here
            options: {
              remUni: 75,//1rem等于多少px的转换单位，默认是75
              remPrecision: 8
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'vue-style-loader', 
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'px2rem-loader',
            // options here
            options: {
              remUni: 75,
              remPrecision: 8
            }
          },
          {
            loader: 'less-loader', 
          }
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(baseConfig, devConfig)

