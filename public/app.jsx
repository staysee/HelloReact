//GreeterMessage, GreeterForm, Greeter are components
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  // add a text area, and placeholder attributes. give ref of message so we can access its value at on form submit.
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

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

    // return React.createElement(    //Same way to do the above(JSX), but a less efficient way.
    //   'h1',
    //   null,
    //   'Hello React.createElement'
    //   )
  }
});

var firstName = 'Stacey';
// var randomMessage = 'This is a random message prop';


ReactDOM.render(                    //common DOM method
  <Greeter name={firstName}/>,                       //pass this to render
  document.getElementById('app')    //location to render
);
