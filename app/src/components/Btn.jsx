var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<button onClick={this.props.onClick} className={"btn " + this.props.className}>{this.props.text}</button>
		)
	} 
});