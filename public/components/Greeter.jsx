var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({   //common create method
  getDefaultProps: function() {     //default prop, if the data wasn't provided
    return {
      name: 'React',
      message: 'This is a default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      //add message here, getting default message from the props
      message: this.props.message
    }
  },
  //expect updates object. since object has all attributes, you can pass it as the one and only argument to set state
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    // var message = this.props.message;
    // change this to use the state. so as we use state, the greeter component renders with a new message.
    var message = this.state.message;

    return (                        //return only ONE root element
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
