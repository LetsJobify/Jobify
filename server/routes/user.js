const express = require('express');
const router = express.Router();

// login user (expect email, password in body)
router.get('/login/',(req,res)=> {return} )

// user form - single user id (expect id in query param)
router.get('/:id', (req,res)=> {return});

// create user (expects all user info in body)
router.post('/', (req,res)=> {return});

// update user (expects all user info in body)
router.put('/:id', (req,res)=> {return});

// delete user (expect id in query param)
router.delete('/:id', (req,res)=> {return});

// login user
router.get('/login/:id',(req,res)=> {return} )
module.exports = router;