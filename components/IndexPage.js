var React = require('react');
var ReactRouter= require('react-router');
var Link = ReactRouter.Link;

class IndexPage extends React.Component {
    render(){
        return <div>
            Index page!
            <Link to={'/logoPage'}>登录</Link>
            <br/>
            <Link to={'/helloWorld'}>HelloWorld页面</Link>
            <br/>
            <Link to={'/select'}>级联下拉列表</Link>
            <br/>
            <Link to={'/formElementDemo'}>表单内元素</Link>
        </div>;
    }
}
module.exports = IndexPage;



