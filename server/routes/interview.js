const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController.js');

// get all interviews for user id within time range (expect time range in body)
router.get(
  '/all/user/:id',
  interviewController.getInterviewsForUser,
  (req, res) => res.status(200).json(res.locals.interview)
);

// get all interviews for company id (expect time range in body)
router.get(
  '/all/company/:id',
  interviewController.getInterviewsForCompany,
  (req, res) => res.status(200).json(res.locals.interview)
);

// get all accepted interviews
router.get('/all/accepted/', interviewController.getOutcomes, (req, res) =>
  res.status(200).json(res.locals.interview)
);

// get all interviews based on aggregate query
<<<<<<< HEAD
router.get('/all/aggregate/', interviewController.aggregate, (req, res) =>
  res.status(200).json(res.locals.interview)
);
=======
router.get('/all/aggregate/', interviewController.aggregate, (req,res)=> res.status(200).json(res.locals.interview));
>>>>>>> 299d708f5f003d4e71ecfdd7812edf5c51fa13f1

// interview form - single interview
router.get('/:id', interviewController.getInterview, (req, res) =>
  res.status(200).json(res.locals.interview)
);

// create an interview
router.post('/', interviewController.createInterview, (req, res) =>
  res.status(201).json(res.locals.interview)
);

// update the interview
router.put('/:id', interviewController.updateInterview, (req, res) =>
  res.status(200).json(res.locals.interview)
);

// delete an interview
router.delete('/:id', interviewController.deleteInterview, (req, res) =>
  res.status(200).json(res.locals.interview)
);

module.exports = router;
