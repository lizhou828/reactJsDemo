//ReactJs 表单内的组件
// /来源于：http://blog.csdn.net/lihongxun945/article/details/46730835

var React = require('react');

class FormElementDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            intro:"",
            city:"hz",
            male:true,
            emailError:"",
            introError:""
        }
    }
    handEmail(e){
        var value = e.target.value;
        var error = '';
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            error = '请输入正确的Email';
        }
        this.setState({
            email:value,
            emailError:error
        })
    }
    handIntro(e){
        var value = e.target.value;
        var error = '';
        if(value == null || value == '' || value.length < 10 ){
            error = "自我介绍不能少于10个字"
        }
        this.setState({
            intro:value,
            introError:error
        })
    }
    handCity(e){
        var value = e.target.value;
        this.setState({
            city:value
        })
    }
    handGender(e){
        var male = !!(e.target.value == 'male');
        this.setState({
            male:male
        })
    }

    render(){
        return(
            <div>
                <p>
                    <label htmlFor="email">email:</label>
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handEmail.bind(this)}/>
                    <span>{this.state.emailError}</span>
                </p>
                <p>
                    <label htmlFor="intro">intro:</label>
                    <textarea type="text" name="intro" id="intro" value={this.state.intro} onChange={this.handIntro.bind(this)}/>
                    <span>{this.state.introError}</span>
                </p>
                <p>
                    <label htmlFor="city">所在城市</label>
                    <select name="city" id="city" value={this.state.city} onChange={this.handCity.bind(this)}>
                        <option value="0">--请选择--</option>
                        <option value="bj">北京</option>
                        <option value="sh">上海</option>
                        <option value="gz">广州</option>
                    </select>
                </p>
                <p>
                    <label>性别</label>
                    <input type="radio" name="gender" value="male" checked={this.state.male} onChange={this.handGender.bind(this)} />
                    <input type="radio" name="gender" value="female" checked={!this.state.male} onChange={this.handGender.bind(this)} />
                </p>
            </div>
        )
    }
}

module.exports = FormElementDemo;