//Webpack 内置支持 CommonJS，所以可以直接用 npm 下载安装模块，然后直接 require 使用模块。
//
//安装 React: npm install react --save
//使用 React: var React = require('react');
//监听编译: webpack -d --watch
//更多关于 Webpack 的介绍 :https://github.com/petehunt/webpack-howto


module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'build/bundle.js'
    },
    //resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        //loaders 指定 jsx-loader 编译后缀名为 .jsx 的文件，建议给含有 JSX 的文件添加 .jsx 后缀，
        // 当然你也可以直接使用 .js 后缀， 相应的 test 配置正则要修改匹配就是。
        loaders: [
            {
                test: /\.js$/,
                loaders: ['jsx?harmony']
            },
            {
                test: /\.(css)$/,
                // 多个加载器通过“!”连接
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                //url-loader 支持base64 编码的行内资源
                loader: 'url-loader?size=8192!url-loader?mimetype=image/png'
            }
        ]
    }
}