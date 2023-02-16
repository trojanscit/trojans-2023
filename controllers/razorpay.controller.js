const shortid = require('shortid');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_LIVE_API_KEY,
	key_secret: process.env.RAZORPAY_LIVE_SECRET
});

exports.razorPayPost = async (req, res) => {
	const payment_capture = 1;
	const amount = req.body.amount;
	const currency = 'INR';

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	};

	try {
		const response = await razorpay.orders.create(options);
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		});
	} catch (error) {
		console.log(error);
	}
};

exports.razorPayVerification = async (req, res) => {
	const secret = process.env.RAZORPAY_LIVE_SECRET;

	const crypto = require('crypto');

	const shasum = crypto.createHmac('sha256', secret);
	shasum.update(JSON.stringify(req.body));
	const digest = shasum.digest('hex');

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('verified');
	} else {
		console.log('not verified');
	}

	res.json({ status: 'ok' });
};
