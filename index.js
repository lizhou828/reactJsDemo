var React = require('react');
var { render }= require('react-dom');

var IndexPage = require('./src/js/components/IndexPage');
var MyHelloWorld = require('./src/js/components/MyHelloWorld');
var Login = require('./src/js/components/login');
var CascadeSelect = require('./src/js/components/CascadeSelect');
var FormElementDemo = require('./src/js/components/FormElementDemo');

var {Router, Route, IndexRoute } = require('react-router');

var injectTapEventPlugin = require( 'react-tap-event-plugin');

injectTapEventPlugin();

//路由器
//深入理解 react-router 路由系统 :http://zhuanlan.zhihu.com/purerender/20381597
const routes = (
    <Router>
        <Route path="/" component={IndexPage}>
            <IndexRoute component={IndexPage}/>
        </Route>
        <Route path="helloWorld" name="helloWorld" component={MyHelloWorld} />
        <Route path="logoPage" name="logoPage" component={Login} />
        <Route path="select" name="select" component={CascadeSelect} />
        <Route path="formElementDemo" name="formElementDemo" component={FormElementDemo}/>
    </Router>
);

render(routes,document.getElementById("index"));




