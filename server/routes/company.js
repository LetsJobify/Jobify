const express = require('express');
const companyController = require('../controllers/companyController.js');

const router = express.Router();

// get company info - single company (expect id in query params)
router.get('/:id', companyController.getCompany, (req, res) => res.json(res.locals.company));

// update company (expects all company info in body)
router.put('/:id', companyController.updateCompany, (req, res) => res.json(res.locals.company));

// delete company (expect id in query param)
router.delete('/:id', companyController.deleteCompany, (req, res) => res.json(res.locals.company));

router.post('/', companyController.createCompany, (req, res) => res.json(res.locals.company));

// get all companies
router.get('/', companyController.getAllCompanies, (req, res) => res.json(res.locals.companies));

module.exports = router;
