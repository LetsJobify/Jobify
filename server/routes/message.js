const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController.js');

// get messages from db and return all messages to client
router.get('/', messageController.getMessages, (req,res)=> res.status(200).json('data'));

module.exports = router;