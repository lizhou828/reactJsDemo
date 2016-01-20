var React = require('react');
class MyLogo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logo : 'This is MyLogo page'
        }
    }
    _onLogoChange(event) {
        this.setState({logo: event.target.value});
    }
    render() {
        return <input type='text' id="logo" value={this.state.logo} onChange={this._onLogoChange.bind(this)}/>;
    }
}
module.exports = MyLogo;


/**
 * 安装 babel-loader 编写ES6的代码
 * 1、通过命令 npm install --save-dev babel-loader 来进行安装
 * 2,、其他地方若需要引用该组件：  import Logo from './Logo'; 即可
 *
 * 通过import引入模块，还可以直接定义类和类的继承关系，这里也不再需要 getInitialState 了，直接在构造函数 constructor
 * 中用this.state = xxx 就好了Babel带来的当然还不止这些，在其帮助下还能尝试很多优秀的ES6特性，比如箭头函数，箭头函数的
 * 特点就是内部的this和外部保持一致，从此可以和 that 、 _this说再见了。
 * 其他还有很多，具体可以参照   Babel的学习文档:http://babeljs.io/docs/learn-es2015/
 *
 * React入门 (1)—使用指南（包括ES5和ES6对比）: http://www.cnblogs.com/Mrs-cc/p/4969755.html
 * ES6风格的示例代码如下：
 *
    class NewDom extends React.Component{
        render() {  //开头花括号一定要和小括号隔一个空格，否则识别不出来
            return <ol>  //标签开头一定要和return一行
              {
                 React.Children.map(this.props.children, function (child) {
                       return <li>{child}</li>;
                 })
              }
            </ol>;
        }
    }

 *
 */


//import React from 'react';
//
//export default class Logo extends React.Component{
//    constructor() {
//        super();
//        this.state = {};
//    }
//    render() {
//        return <input type='text' value='This is from MyLogo.js'/>;
//    }
//}


//var React = require('react');
//var ReactDOM = require('react-dom');

//class MyLogo extends React.Component {
//    render() {
//        return <div>Hello World !  logo</div>;
//    }
//}
//ReactDOM.render(<MyLogo />, document.getElementById("logo"));





