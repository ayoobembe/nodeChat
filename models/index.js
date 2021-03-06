"use strict";

var fs        = require("fs");
var path      = require("path");
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/config.json')[env];
var Sequelize = require("sequelize");
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
