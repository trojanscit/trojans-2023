const express = require('express');

const router = express.Router();

const { authPost } = require('../controllers/auth.controller');

router.post('/verify-email', authPost);

module.exports = router;
