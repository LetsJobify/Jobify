const express = require('express');
const router = express.Router();

// user form - single user id (expect id in query param)
<<<<<<< HEAD
router.get('/:id', (req, res) => {
  return;
});

// create user (expects all user info in body)
router.post('/', (req, res) => {
  return;
});

// update user (expects all user info in body)
router.put('/:id', (req, res) => {
  return;
});

// delete user (expect id in query param)
router.delete('/:id', (req, res) => {
  return;
});
=======
router.get('/:id', (req,res)=> {return});

// create user (expects all user info in body)
router.post('/', (req,res)=> {return});

// update user (expects all user info in body)
router.put('/:id', (req,res)=> {return});

// delete user (expect id in query param)
router.delete('/:id', (req,res)=> {return});
>>>>>>> 71a5959f04b4257f4a491031218f4ae33781f52e

module.exports = router;
