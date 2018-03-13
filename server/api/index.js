'use strict'
const apiRouter = require('express').Router();
// const db = require('../db');
const JobPosting = require('../db/models/job-posting');

// apiRouter.use('/jobposting', require('./job-posting'));
// apiRouter.use('/document', require('./document'));
// apiRouter.use('/reference', require('./reference'));

// /api

apiRouter.get('/', (req, res, next) => {
  JobPosting.findAll()
    .then(jobPostings => {
      res.json(jobPostings.jobTitle)
    })
    .catch(next);
});

apiRouter.post('/', (req, res, next) => {
  JobPosting.create(req.body)
    .then(jobPosting => res.status(201).json(jobPosting.jobTitle))
    .catch(next);
});

module.exports = apiRouter;

