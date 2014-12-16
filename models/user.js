"use strict";
//auto-included: id, createdAt, updatedAt

// var index = require("../models/index.js");

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
				User.hasMany(models.Message)
			}
		}
	});

	return User;
};