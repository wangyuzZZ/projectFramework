const path = require("path");
const webpack = require("webpack");
//抽离CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//压缩css
const Op = require("optimize-css-assets-webpack-plugin")
//清除文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
//html配置
const htmlPluig = require("./html.confiig.js")
const glob = require('glob');
//删除多余CSS(必须结合 extract-text-webpack-plugin 插件使用)
const PurifyCSSPlugin = require('purifycss-webpack');
//json文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = [
    //版权声明
    new webpack.BannerPlugin("版权所有,翻版必究"),
    // 模块热替换
    new webpack.HotModuleReplacementPlugin(),
    //抽离css
    new ExtractTextPlugin("static/css/[name].min.css"),
    //压缩css
    new Op(),
    //清除文件
    new CleanWebpackPlugin(),
    //清除未使用的CSS
    new PurifyCSSPlugin({
        //路径相对于配置文件路径
        paths: glob.sync(path.join(__dirname, "../src/*.html")),
    }),
    //复制JSON文件
    new CopyWebpackPlugin([{
        from:'./src/json',
        to:'../dist/static/json'
    }]),
    //编译Html
   ...htmlPluig,
    //引入三方插件
    new webpack.ProvidePlugin({
        $:"jquery"
    })
]