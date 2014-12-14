var Sequelize = require('sequelize')
	, sequelize = new Sequelize('database_name', 'username', 'password', {
		dialect: "sqlite",
		port: 3306,
	});


sequelize
	.authenticate()
	.complete(function(err) {
		if(!!err) {
			console.log('Unable to connect to database:', err)
		} else {
			console.log('Connection successfully established');
		}
	})