var Greeter = React.createClass({   //common create method
  getDefaultProps: function() {     //default prop, if the data wasn't provided
    return {
      name: 'React',
      message: 'This is a default message'
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();             //prevents form from submitting and causing page refresh

    var name = this.refs.name.value;

    alert(name);
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (                        //return only ONE root element
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
