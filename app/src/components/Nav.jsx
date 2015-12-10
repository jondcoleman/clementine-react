var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function() {
		return (
			<header>
				<p>Welcome, <span id="display-name">{this.props.user.displayName}</span>!</p>
				<Link className="menu" to={"/"}>Home</Link>
				<p>|</p>
				<Link className="menu" to={"/profile"}>Profile</Link>
				<p>|</p>
				<a className="menu" href="/logout">Logout</a>
			</header>		
		)
	}
});