var React = require('react');
var TextField = require('material-ui/lib/text-field');
var RaisedButton = require('material-ui/lib/raised-button');
var Dialog = require('material-ui/lib/dialog');

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameErr: '',
            passwordErr: ''
        };

    }

    _usernameChange(e) {
        this.setState({username: e.target.value, err: '', usernameErr: ''});
    };

    _passwordChange(e) {
        this.setState({password: e.target.value, err: '', passwordErr: ''});
    };

    _touchTapHandler(e) {
        e.preventDefault();
        if (!this.state.username || this.state.username === '') {
            this.setState({usernameErr: '请输入用户名!'});
            return;
        }

        if (!this.state.password || this.state.password === '') {
            this.setState({passwordErr: '请输入密码!'});
            return;
        }

        //jq.post(Constants._URL_LOGIN, this.state, {cache: true})
        //    .then(function(xhr, response) {
        //        cookie.save('key', response.js);
        //        this.props.history.pushState({result: response.result}, '/add');
        //    }.bind(this))
        //    .catch(function(xhr, response, e) {
        //        this.setState({err: response.result})
        //    }.bind(this));

        /*jq.ajax({
         url: Constants._URL_LOGIN,
         type: 'post',
         dataType: 'json',
         data: {username: this.state.username, password: this.state.password},
         success: function(data) {
         this.props.history.pushState({result: data}, '/add');
         }.bind(this),
         error: function(err) {
         this.setState({err: err.responseText})
         }.bind(this)

         })*/

    };

    _reset() {
        this.setState({
            err: '',
            username: '',
            password: '',
            usernameErr: '',
            passwordErr: ''
        });
    };

    render() {

        return (
            <div>
                <label className="mdl-textfield__label">{ this.state.err }</label><br/>
                <TextField floatingLabelText="用户名" value={this.state.username} errorText={this.state.usernameErr} onChange={this._usernameChange.bind(this)}
                /><br/>
                <TextField floatingLabelText="密码" type="password" value={this.state.password} errorText={this.state.passwordErr} onChange={this._passwordChange.bind(this)}/><br/>
                <div>
                    <RaisedButton label="重置" onTouchTap={this._reset.bind(this)}/>
                    <RaisedButton label="提交" onTouchTap={this._touchTapHandler.bind(this)} secondary/>
                </div>

            </div>
        )
    }
}
module.exports = Login;


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
//        return <input type='text' value='This is from login.js'/>;
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





