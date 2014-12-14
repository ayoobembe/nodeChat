"use strict"

module.exports = function(sequelize, DataTypes){
	var Message = sequelize.define("Message", {
		title: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models){
				Task.belongsTo(models.User);
			}
		}
	});

	return Task
}