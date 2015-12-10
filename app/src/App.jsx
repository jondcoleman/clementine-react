var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes');

var ajax = require('./ajax-functions');
var appUrl = window.location.origin;
var apiUrl = appUrl + '/api/:id';

var App = React.createClass({
  getInitialState: function() {
    return({
      user: undefined,
      response: false
    })
  },
  componentDidMount: function() {
    if(!this.state.user){
      ajax('GET', apiUrl, function(data){
        if (data != 'no user'){
          this.setState({
            user: JSON.parse(data)
          })
        }
        this.setState({
          response: true
        })
      }.bind(this))	      
    }
  },
  render: function() {
      if(this.state.response){
        return (
          <Routes user={this.state.user}/>
        )        
      } else {
        return (
          <div>Loading...</div>
        )
      }
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('content')
);