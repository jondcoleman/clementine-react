var React = require('react');
var Nav = require('./Nav');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		)
	}
})