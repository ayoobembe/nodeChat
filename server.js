var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socket = require('./src/socketController.js')(io);
var sequelize = require('sequelize');
var bodyParser = require('body-parser');

var routes = require('./routes/index')
var users = require('./routes/users')
var models = require('./models')

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
	extended: true
}));

app.set('views', __dirname +'/views')
app.set('view engine', 'ejs');
app.set('models', require('./models'));

app.use(express.static(__dirname + '/public'));
app.use('/', routes);
app.use('/signup', users)


app.set('port', 3000)

models.sequelize.sync().success(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});

module.exports = app;



// app.get('/', function(request,response) {
// 	response.render('index');
// });

// app.get('/greetings', function(request,response) {
// 	response.render('greetings', {name: 'Spike'});
// });

// app.get('/signup', function(request, response) {
// 	response.render('signup');
// });

// app.post('/signup', function(request, response) {
// 	var name = request.body.name;
// 	var password = request.body.password;
// 	User.create({username: name}).success(function (){
// 		console.log("Successfully saved "+name+"to database");
// 	});
// });










// var User = require('./models/user')()



// server.listen(3000, function() {
// 	console.log("Server listening on port 3000");
// });