const express = require('express');
const router = express.Router;

// get company info - single company (expect id in query param)
router.get('/:id', (req,res)=> );

// create company 
router.post('/:id', (req,res)=>);

// update company (expects all company info in body)
router.put('/:id', (req,res)=>);

// delete company (expect id in query param)
router.delete('/:id', (req,res)=>);

module.exports = router;