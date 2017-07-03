//Setting up the standard fields for the server here:
var express = require('express');
var app = express();
var path = require('path');
var port = 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//This is receiving the post from the client side:
app.post ('/findResult', function(req, res){
  console.log(req.body);
//Here setting variables according to the information being sent from the object
//from the client side:
  var returnAnswer;
  var x = Number(req.body.x);
  var y = Number(req.body.y);
  var equationType = req.body.type;
//Using an if/else statement here to calculate the equation posted from the
//client side:
  if (equationType == 'addition'){
    returnAnswer = x + y;
  } else if (equationType == 'subtraction'){
    returnAnswer = x - y;
  } else if (equationType == 'division'){
    returnAnswer = x / y;
  } else if (equationType == 'multiplication'){
    returnAnswer = x * y;
  }
//Here creating an object out of the results of each if/else statement:
  var response = {
    correctAnswer: returnAnswer
  };
//Here sending the object back as response:
  res.send(response);
});

//Here is the catch all:
app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});
//This prepares to listen on the port called:
app.listen(port, function() {
  console.log('Server running on port', port);
});
