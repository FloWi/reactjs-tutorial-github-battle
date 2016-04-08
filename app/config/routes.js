var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
    <Router>
        <Route path='/' component={Main} >
            <IndexRoute component={Home} /> /* matches, if none of the other routes matches*/
        </Route>
    </Router>
);

module.exports = routes;
