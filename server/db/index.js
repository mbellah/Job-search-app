'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/job-search-app', {
  logging: false
});

console.log(chalk.yellow('Opening database connection'));

module.exports = db;
