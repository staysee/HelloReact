var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Stacey';

ReactDOM.render(                    //common DOM method
  <Greeter name={firstName}/>,      //pass this to render
  document.getElementById('app')    //location to render
);
