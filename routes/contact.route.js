const express = require('express');

const router = express.Router();

const { contactPost } = require('../controllers/contact.controller');

router.post('/contact', contactPost);

module.exports = router;
