'use strict';
const db = require('../index.js');
const JobPosting = require('./job-posting');
const Document = require('./document');
const Reference = require('./reference');

Document.belongsTo(JobPosting);
Reference.belongsTo(JobPosting);
JobPosting.hasMany(Reference);

module.exports = db;
