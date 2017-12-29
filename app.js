var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');



var about = require('./routes/about');
var portfolio = require('./routes/portfolio')
var one = require('./routes/one')


var app = express();
var port = 3000;

app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

  

app.use('/', about);
app.use('/', portfolio);
app.use('/', one);




app.use('/static', express.static(__dirname + '/public'));



app.listen(port, function(){
    console.log('Express listening on port', port);
})
