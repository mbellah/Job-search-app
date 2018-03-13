const router = require('express').Router();
const JobPosting = require('../db/models').model(JobPosting);

// /api/jobposting

router.get('/jobposting/:id', (req, res, next) => {
  JobPosting.findById(req.params.id)
    .then(jobPosting => res.json(jobPosting))
    .catch(next);
});
//apiRouter.param??

router.put('/jobposting/:id', (req, res, next) => {
  JobPosting.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(res.json('Updated Successfully!'))
    .catch(next);
});

router.delete('/jobposting/:id', (req, res, next) => {
  JobPosting.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});
