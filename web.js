var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(_dirname + '/'));
});

app.use(express.logger());

app.get('/', function(request, response) {
  response.sendfile(_dirname + '/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
