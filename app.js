var express = require('express');
var path = require('path');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3000, function() {
    console.log('localhost:3000');
});
