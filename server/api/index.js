'use strict'
const apiRouter = require('express').Router();
// const db = require('../db');
const JobPosting = require('../db/models/job-posting');
const Document = require('../db/models/document');
const Reference = require('../db/models/reference');

apiRouter.use('/jobposting', JobPosting);
/* why doesn't this work?:
 apiRouter.use('/jobposting', JobPosting); */
apiRouter.use('/document', Document);
apiRouter.use('/reference', Reference);

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

