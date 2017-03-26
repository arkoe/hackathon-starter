// Requiring dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/demopost', function(req, res) {
  var data = req.body;
  return res.send({message:data.message}); 
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
