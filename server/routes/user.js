const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// login user (expect email, password in body)
router.post('/login', userController.verifyUser, (req,res)=> res.status(200).json(res.locals.userInfo));

// user form - single user id (expect id in query param)
router.get('/:id', userController.getUser, (req, res) => res.status(200).json(res.locals.user));

// create user (expects all user info in body)
router.post('/', userController.createUser, (req, res) => res.status(200).json(res.locals.newUser));

// update user (expects all user info in body)
router.put('/:id', userController.updateUser, (req, res) => (req,res)=> res.status(200).send('User has been updated!'));

// delete user (expect id in query param)
router.delete('/:id', userController.deleteUser, (req,res)=> res.status(200).send('User has been deleted!'));

module.exports = router;
