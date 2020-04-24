const path = require("path");
const plugin = require("./plugins.config.js")
const loader = require("./loader.config.js"); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //生成资源映射文件
    devtool: 'eval-source-map',
    // 编译模式
    mode:"development",
    context:path.resolve(__dirname,"../"),
    entry:{
        header:'./src/components/header/header.js',
        footer:'./src/components/footer/footer.js',
        main:"./src/js/index",
        about:"./src/js/about.js",
        home:"./src/js/home.js"
    },
    output:{
        path:path.resolve(__dirname,"../dist"),
         // 输出文件名
        filename: "static/js/[name]-bundle.js",
        publicPath: "http://10.23.48.45:5500/"
    },
    resolve: {
        // 取别名
        alias: {
            "normalized-style":path.resolve(__dirname, '../src/style/normalized.less'),
            "header-style":path.resolve(__dirname, '../src/components/header/header.less'),
            "footer-style":path.resolve(__dirname, '../src/components/footer/footer.less'),
            "index-style": path.resolve(__dirname, '../src/less/index.less')
        }
    },
    //配置热更新
    devServer:{
         // 设置服务器访问的目录(默认为根目录)
         contentBase:path.resolve(__dirname,'../'), // 最好设置成绝对路径
         // 设置服务器的ip地址,可以是localhost
         host:'localhost',
         // 设置端口
         port:5500,
         // 设置自动拉起浏览器
         open:'chrome',
         // 自动刷新
         inline: true,
         // 模块热替换
         hot: true 
    },
    //加载插件
    plugins: plugin,
    //配置Babel loader
    module: loader,
    optimization: {
        minimizer: [
            // 丑化JS
            new UglifyJsPlugin({
                test: /\.js$/,
                exclude: /node_modules/,
                uglifyOptions: {
                    // 是否压缩
                    compress: true
                }
            })
        ]
    }
}
