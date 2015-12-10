var React = require('react');
var Nav = require('./Nav');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Nav user={this.props.route.user}/>
				{this.props.children}
			</div>
		)
	}
})