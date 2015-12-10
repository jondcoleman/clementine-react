var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Login = require('./components/Login');
var ClicksContainer = require('./components/ClicksContainer');
var Main = require('./components/Main');
var Profile = require('./components/Profile');

module.exports = React.createClass({
	requireLogin: function (nextState, replaceState) {
		if (!this.props.user) {
			replaceState({ nextPathname: nextState.location.pathname }, '/Login')
		}
	}, 
	render: function() {
		return (
			<Router>
				<Route path="/" component={Main} onEnter={this.requireLogin} user={this.props.user}>
					<IndexRoute component={ClicksContainer}/>
					<Route path="/Profile" component={Profile} user={this.props.user}/>
				</Route>
				<Route path="/Login" component={Login}/>
			</Router>
		)			
	}
})