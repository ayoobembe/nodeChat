var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');
	//tell app to use ejs as templating engine
app.use(express.static(__dirname + '/public'));
	//tell app public folder is


app.get('/', function(request,response) {
	response.render('index');
});

app.get('/greetings', function(request,response) {
	response.render('greetings', {name: 'Spike'});
});

server.listen(3000, function() {
	console.log("Server listening on port 3000");
});

module.exports = server;