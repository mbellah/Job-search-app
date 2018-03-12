'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');

console.log(chalk.yellow('Opening database connection'));

module.exports = new Sequelize('postgres://localhost:5432/job-search-app');
