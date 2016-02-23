//Webpack 内置支持 CommonJS，所以可以直接用 npm 下载安装模块，然后直接 require 使用模块。
//
//安装 React: npm install react --save
//使用 React: var React = require('react');
//监听编译: webpack -d --watch
//更多关于 Webpack 的介绍 :https://github.com/petehunt/webpack-howto


module.exports = {
    entry: {
        'index':'./index.js' // Your appʼs entry point
    },
    output: {
        path: __dirname,
        filename: '/build/index.js'
    },
    //resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
    //resolve: {
    //    extensions: ['', '.js', '.jsx']
    //},
    module: {
        //loaders 指定 jsx-loader 编译后缀名为 .jsx 的文件，建议给含有 JSX 的文件添加 .jsx 后缀，
        // 当然你也可以直接使用 .js 后缀， 相应的 test 配置正则要修改匹配就是。
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                 //babel6 才需要配置这个，presets里面两个预编译插件，前一个用于编译es6，后一个用于编译react。按需配置。这个工程都需要。
                 query:{
                    presets: ['es2015','react']
                 }
            },
            //{
            //    test: /\.js$/,
            //    exclude: /node_modules/,
            //    loader: 'react-hot!jsx-loader?harmony'  //让Webpack用react-hot-loader去加载React组件
            //},
            {
                test: /\.(css)$/,
                // 多个加载器通过“!”连接
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                //url-loader 支持base64 编码的行内资源
                loader: 'url-loader?size=8192!url-loader?mimetype=image/png'
                //代码中url-loader?size=8192含义就是对于所有小于8192字节的图片资源也进行打包。这在一定程度上可以替代Css Sprites方案，
                // 用于减少对于小图片资源的HTTP请求数量
            }
        ]
    }
};




//以上代码主要告诉了webpack：
//
//哪个文件需要打包（entry字段），打包之后生成的新文件存到哪个路径（output中的path）、新文件叫什么名字（output中的filename）；
//要使用哪些加载器（module.loaders）。这里要使用babel来编译jsx和es6的代码。
//
//总得来说，webpack从entry拿到目标文件，通过loaders进行编译，从output输出，其他功能由plugins引入。
//
//注：index.js：负责渲染组件到页面上。相当于一个总的出口。因为会自动加载依赖关系，所以webpack.config.js文件只需要配置这一文件即可。
//另外，这个工程比较简单，只需配置一个js文件。
//
//如果要打包多个js文件，这么配置：
//entry: {
//        'file1': './index.js',    //key只是个名字，可以自由改
//        'file2': './entry2.js'
//}