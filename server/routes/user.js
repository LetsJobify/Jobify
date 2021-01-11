const express = require('express');
const router = express.Router;

// user form - single user id (expect id in query param)
router.get('/:id', (req,res)=> );

// create user (expects all user info in body)
router.post('/', (req,res)=>);

// update user (expects all user info in body)
router.put('/:id', (req,res)=>);

// delete user (expect id in query param)
router.delete('/:id', (req,res)=>);

module.exports = router;