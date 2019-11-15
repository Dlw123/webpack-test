

//导入路径处理模块 ，node.js自带的核心模块，不需要安装
let path = require('path')

let miniCssExtractPlugin = require('mini-css-extract-plugin')

//导入处理html模板插件
let htmlWebpackPlugin = require('html-webpack-plugin');

//暴露文件
module.exports = {

    //配置模式
    // development   开发模式
    // production    生产模式
    mode: 'development',


    // 配置入口文件

    entry: {
        app: './app/app.js'
    },

    // 配置输出文件路径

    output: {
        //打包输出的文件路径
        path: path.resolve(__dirname + '/build'),

        //打包输出文件重命名
        filename: '[name].min.js',
    },

    // 配置loader
    //处理css、less
    module: {

        // 定义loader规则
        rules: [

            //每一个对象就是一个loader规则
            // 处理css
            {
                test: /\.css$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'css-loader' }

                ]
            },

            // 处理less
            {
                test: /\.less$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }

                ]

            },

            //处理图片
            {
                test:/\.(png|gif|jpg|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            //如果图片小鱼等于2000B，图片呗转为base64

                            limit:10240
                        }
                    }
                ]
            },

            // 处理HTML模板的图片
            {
                test:/\.html?$/,
                use:[
                    {loader:'html-withimg-loader'}
                ]
            }
        ]
    },


    // 配置插件

    // 实例化分离css插件
    plugins: [

        new miniCssExtractPlugin({
            //文件名
            filename: '[name].css'
        }),

//实例化处理html模板插件
new htmlWebpackPlugin({
    //处理模板的路径
    template: './app.html',

    /**
      true: 将生成的js插入到body结束标签之前, 默认为 true
      false: 没有插入生成的js
      head: 将生成的js插入在head结束标签之前
      body: 等同于 true
    */
    inject: 'body',

    //最小化
    minify: {
      //是否移除注释, 该属性在该插件版本无效，默认是去除注释
      removeComments: true,

      //是否移除标签属性的引号(双引号或者单引号)
      removeAttributeQuotes: true,

      //是否移除html文件的空白符
      collapseWhitespace: true
    },

    // 输出文件重命名
    // filename: 'app.min.html'

  })

    ]
}