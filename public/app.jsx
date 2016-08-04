var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.onButtonClick}>
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
  onButtonClick: function(e) {
    e.preventDefault();             //prevents form from submitting and causing page refresh

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';             //clears the box after updating value

    // if no string to update, it won't change the value
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
    // alert(name);
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (                        //return only ONE root element
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
        <GreeterForm/>


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
var randomMessage = 'This is a random message prop';


ReactDOM.render(                    //common DOM method
  <Greeter name={firstName} message={randomMessage}/>,                       //pass this to render
  document.getElementById('app')    //location to render
);
