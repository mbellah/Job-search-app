'use strict'
const apiRouter = require('express').Router();
// const db = require('../db');
const JobPosting = require('../db/models/job-posting');
const Document = require('../db/models/document');
const Reference = require('../db/models/reference');

apiRouter.use('/jobpostings', JobPosting);
apiRouter.use('/document', Document);
apiRouter.use('/reference', Reference);

apiRouter.use((req, res, next) => {
  res.status(404).send('Not found');
});


module.exports = apiRouter;

