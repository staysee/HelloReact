var express = require('express');

// Create our app
var app = express();

app.use(express.static('public')); // lets us add functionality to our express app

app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
