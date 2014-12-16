var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/signup', function(request, response){
	console.log('I am here!');
});

router.post('/signup', function(request, response){
	// console.log(request.body.name);
	models.User.create({
		username: request.param('name')
	}).success(function() {
		console.log('Success!');
		response.redirect('/');
	});
});

module.exports = router;