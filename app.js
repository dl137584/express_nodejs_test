var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// GET method route
app.get('/api/books', function(req, res) {
  res.send('GET request to the /api/books');
});

// POST method route
app.post('/api/books', function(req,res) {
  res.send('POST request to the /api/books');
});

// 모든 요청 메서드에 대응
app.all('/', function(req, res, next) {
  console.log('All request to the root section ...');
  next(); // pass control to the next handler
});

app.get('/', function(req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function(req, res,next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function(rea, res) {
  res.send('Hello from homepage!');
});

app.listen(3000, function() {
  console.log('Example app listening on oprt 2000');
});
