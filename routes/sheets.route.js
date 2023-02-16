const express = require('express');

const router = express.Router();

const { sheetsPost } = require('../controllers/sheets.controller');

router.post('/data', sheetsPost);

module.exports = router;
