var React = require('react');
var ReactRouter= require('react-router');
var Link = ReactRouter.Link;
//var Redirect = ReactRouter.Redirect;
class IndexPage extends React.Component {
    render() {
        return <div>
            Index page!
            <Link to={'/logoPage'}>to logoPage</Link>

            <br/>
             <Link to={'/helloWorld'}>to helloWorld page</Link>
        </div>;
    }
}
module.exports = IndexPage;



