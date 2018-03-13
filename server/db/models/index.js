'use strict';
const db = require('../index.js');
const JobPosting = require('./job-posting.js');
const Document = require('./document.js');
const Reference = require('./reference');

Document.belongsTo(JobPosting);
Reference.belongsTo(JobPosting);
JobPosting.hasMany(Reference);

module.exports = db;
