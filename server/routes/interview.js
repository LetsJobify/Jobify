const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController.js');

// get all interviews for user id within time range (expect time range in body)
router.get('/all/user/:id', interviewController.getAllUserInterviews, (req, res) => res.json(res.locals.interviews));

// get all interviews for company id (expect time range in body)
router.get('/all/company/:id', interviewController.getAllCompanyInterviews, (req, res) => res.json(res.locals.interviews));

// get all accepted interviews 
router.get('/all/accepted/', (req,res)=> {return});

// get all interviews based on aggregate query
router.get('all/aggregate/', (req,res)=> {return});

// interview form - single interview
router.get('/:id', (req,res)=> {return});

module.exports = router;