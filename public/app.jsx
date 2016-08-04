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

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
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
      name: this.props.name
    }
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (                        //return only ONE root element
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
