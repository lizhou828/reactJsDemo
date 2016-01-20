var React = require('react');
var ReactRouter= require('react-router');
var Link = ReactRouter.Link;

class IndexPage extends React.Component {
    render(){
        return <div>
            Index page!
            <Link to={'/logoPage'}>to login Page</Link>
            <br/>
            <Link to={'/helloWorld'}>to helloWorld page</Link>
        </div>;
    }
}
module.exports = IndexPage;



