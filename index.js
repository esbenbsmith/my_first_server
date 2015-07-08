var express = require('express');
var app = express();



app.get('/', function (req, res) {
  res.send("Hello World");
});

app.get('/my_name_is/:name', function (req, res) {
  res.send("My name is " + req.params.name);
});

app.get('/api/users', function (req, res) {
  var people =[{Name:"Esben", Age:"32"},{Name: "James", Age:"44"}];
	res.json(people);
});

app.get('/api/books', function (req, res) {
  var books =["1984","D-Day", "Black Hawk Down"];
	res.json(books);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});