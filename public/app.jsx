var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');


//GreeterMessage, GreeterForm, Greeter are components


var firstName = 'Stacey';
// var randomMessage = 'This is a random message prop';


ReactDOM.render(                    //common DOM method
  <Greeter name={firstName}/>,                       //pass this to render
  document.getElementById('app')    //location to render
);
