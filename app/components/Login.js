// var React = require('react');

var Login = React.createClass({displayName: "Login",
	render: function() {
		return (
			React.createElement("div", {className: "container"}, 
				React.createElement("div", {className: "login"}, 
					React.createElement("img", {src: "public/img/clementine_150.png"}), 
					React.createElement("br", null), 
					React.createElement("p", {className: "clementine-text"}, "Clementine.js"), 
					React.createElement("a", {href: "/auth/github/callback"}, 
						React.createElement("div", {className: "btn", id: "login-btn"}, 
							React.createElement("img", {src: "public/img/github_32px.png", alt: "github logo"}), 
							React.createElement("p", null, "LOGIN WITH GITHUB")
						)
					)
				)
			)
		);
	}
})

