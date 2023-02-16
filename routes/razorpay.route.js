const express = require('express');

const router = express.Router();

const {
	razorPayPost,
	razorPayVerification
} = require('../controllers/razorpay.controller');

router.post('/razorpay', razorPayPost);

router.post('/verification', razorPayVerification);

module.exports = router;
