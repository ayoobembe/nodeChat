//code to set up and connect to database

// var Sequelize = require('sequelize')
// 	, sequelize = new Sequelize('database_name', 'username', 'password', {
// 		dialect: "sqlite",
// 		port: 3306,
// 	});






// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + '/config/config.json')[env];
// var Sequelize = require('sequelize');
// var sequelize = new Sequelize(config.database, config.username, config.password, config);
// var db = {};


// sequelize
// 	.authenticate()
// 	.complete(function(err) {
// 		if(!!err) {
// 			console.log('Unable to connect to database:', err)
// 		} else {
// 			console.log('Connection successfully established');
// 		}
// 	})