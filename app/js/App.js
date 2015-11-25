// var React   = require('react');
// var Login = require('./Login.jsx');

var Login = React.createClass({
	render: function() {
		return (
			<div className="container"> 
				<div className="login">
					<img src="/public/img/clementine_150.png" />
					<br />
					<p className="clementine-text">Clementine.js</p>
					<a href="/auth/github/callback">
						<div className="btn" id="login-btn">
							<img src="/public/img/github_32px.png" alt="github logo" />
							<p>LOGIN WITH GITHUB</p>
						</div>
					</a>
				</div>
			</div>
		);
	}
})


ReactDOM.render(
  <Login/>,
  document.getElementById('content')
);