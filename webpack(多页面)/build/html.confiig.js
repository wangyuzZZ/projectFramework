//生成HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
//编译index
module.exports.compileIndex = new HtmlWebpackPlugin({
     // 需要引用的原模版文件
     template: "./src/index.html",
     // 设置JS文件插入的位置，可选：“true/body”，“head”
     inject: true,
     // 指定输出文件所依赖的入口文件（*.js）的[name]，
     // 这里的值是由“entry”（入口）属性内定义的
     //包含的模块
     chunks: ["main"],
     // 输出的子目录及完整文件名(相对于编译后的路径 => output.path)
     filename: "index.html"
})
//编译about
module.exports.compileAbout = new HtmlWebpackPlugin({
    // 需要引用的原模版文件
    template: "./src/pages/about.html",
    // 设置JS文件插入的位置，可选：“true/body”，“head”
    inject: true,
    // 指定输出文件所依赖的入口文件（*.js）的[name]，
    // 这里的值是由“entry”（入口）属性内定义的
    //包含的模块
    chunks: ["about"],
    // 输出的子目录及完整文件名(相对于编译后的路径 => output.path)
    filename: "static/pages/about.html"
})
//编译home
module.exports.compileHome = new HtmlWebpackPlugin({
    // 需要引用的原模版文件
    template: "./src/pages/home.html",
    // 设置JS文件插入的位置，可选：“true/body”，“head”
    inject: true,
    // 指定输出文件所依赖的入口文件（*.js）的[name]，
    // 这里的值是由“entry”（入口）属性内定义的
    //包含的模块
    chunks: ["home"],
    // 输出的子目录及完整文件名(相对于编译后的路径 => output.path)
    filename: "static/pages/home.html"
})
*/
module.exports = [
    new HtmlWebpackPlugin({
        // 需要引用的原模版文件
        template: "./src/index.html",
        // 设置JS文件插入的位置，可选：“true/body”，“head”
        inject: true,
        // 指定输出文件所依赖的入口文件（*.js）的[name]，
        // 这里的值是由“entry”（入口）属性内定义的
        //包含的模块
        chunks: ["main","header","footer"],
        // 输出的子目录及完整文件名(相对于编译后的路径 => output.path)
        filename: "index.html"
   }),
   new HtmlWebpackPlugin({
        // 需要引用的原模版文件
        template: "./src/pages/about.html",
        // 设置JS文件插入的位置，可选：“true/body”，“head”
        inject: true,
        // 指定输出文件所依赖的入口文件（*.js）的[name]，
        // 这里的值是由“entry”（入口）属性内定义的
        //包含的模块
        chunks: ["about","header","footer"],
        // 输出的子目录及完整文件名(相对于编译后的路径 => output.path)
        filename: "static/pages/about.html"
    }),
    new HtmlWebpackPlugin({
        // 需要引用的原模版文件
        template: "./src/pages/home.html",
        // 设置JS文件插入的位置，可选：“true/body”，“head”
        inject: true,
        // 指定输出文件所依赖的入口文件（*.js）的[name]，
        // 这里的值是由“entry”（入口）属性内定义的
        //包含的模块
        chunks: ["home","header","footer"],
        // 输出的子目录及完整文件名(相对于编译后的路径 => output.path)
        filename: "static/pages/home.html"
    })
]