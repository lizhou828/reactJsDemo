var React = require('react');
var { render }= require('react-dom');

var IndexPage = require('./components/IndexPage');
var MyHelloWorld = require('./components/MyHelloWorld');
var MyLogo = require('./components/MyLogo');
var {Router, Route, IndexRoute } = require('react-router');

//todo 路由器中增加Redirect
//var Redirect = ReactRouter.Redirect;
//var DefaultRoute = ReactRouter.DefaultRoute;
//var Link = ReactRouter.Link;

var injectTapEventPlugin = require( 'react-tap-event-plugin');

injectTapEventPlugin();

//路由器
const routes = (
    <Router>
        <Route path="/" component={IndexPage}>
            <IndexRoute component={IndexPage}/>
        </Route>
        <Route path="helloWorld" name="helloWorld" component={MyHelloWorld} />
        <Route path="logoPage" name="logoPage" component={MyLogo} />
    </Router>
);

render(routes,document.getElementById("index"));




