var models = require('../models');
var express = require('express');
var router = express.Router();

//what does router do?
router.get('/', function(request, response){
	models.User.findAll({
		include: [models.Message]
	}).then(function(users) {
		// console.log("FETCHED FROM ROUTER>>INDEX")
		response.render('index', {
			title: 'Express',
			users: users
		});
	});
});

module.exports = router;