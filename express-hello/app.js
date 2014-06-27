var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello from Express!');
});

var server = app.listen(8080, function() {
  console.log('Listening on port %d', server.address().port);
});
