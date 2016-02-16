var React = require('react');
var { render }= require('react-dom');

var IndexPage = require('./components/IndexPage');
var MyHelloWorld = require('./components/MyHelloWorld');
var Login = require('./components/login');
var CascadeSelect = require('./components/CascadeSelect');
var FormElementDemo = require('./components/FormElementDemo');

var {Router, Route, IndexRoute } = require('react-router');

var injectTapEventPlugin = require( 'react-tap-event-plugin');

injectTapEventPlugin();

//路由器
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




