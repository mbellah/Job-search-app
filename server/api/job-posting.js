const router = require('express').Router();
const { JobPosting } = require('../db/models');

// /api/jobpostings

router.get('/', (req, res, next) => {
  JobPosting.findAll()
    .then(jobPostings => {
      res.json(jobPostings)
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  JobPosting.create(req.body)
    .then(jobPosting => res.status(201).json(jobPosting.jobTitle))
    .catch(next);
});

//Single JobPosting
router.get('/:id', (req, res, next) => {
  JobPosting.findById(req.params.id)
    .then(jobPosting => res.json(jobPosting))
    .catch(next);
});
//apiRouter.param??

router.put('/:id', (req, res, next) => {
  JobPosting.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(res.json('Updated Successfully!'))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  JobPosting.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});

