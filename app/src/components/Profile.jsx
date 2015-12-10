var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		return (
			<div className="github-profile">
				<img src="/public/img/gh-mark-32px.png" alt="github logo" />
				<p><span>ID: </span><span id="profile-id" className="profile-value">{this.props.route.user.id}</span></p>
				<p><span>Username: </span><span id="profile-username" className="profile-value">{this.props.route.user.username}</span></p>
				<p><span>Display Name: </span><span id="display-name" className="profile-value">{this.props.route.user.displayName}</span></p>
				<p><span>Repositories: </span><span id="profile-repos" className="profile-value">{this.props.route.user.publicRepos}</span></p>
				<Link className="menu" to={"/"}>Home</Link>
				<p id="menu-divide">|</p>
				<a className="menu" href="/logout">Logout</a>
			</div>   
		)
	}
})