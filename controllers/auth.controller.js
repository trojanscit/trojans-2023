const nodemailer = require('nodemailer');
var rn = require('random-number');

const generateOTP = () =>
	rn({
		min: 100000,
		max: 999999,
		integer: true
	});

exports.authPost = async (req, res) => {
	const otp = generateOTP();
	const output = `
        <p>${otp} is your OTP</p>
    `;
	let transporter = await nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.gmail.com',
		auth: {
			user:process.env.EMAIL,
			pass:process.env.PASSWORD
		}
	});

	let mailOptions = {
		from: process.env.EMAIL,
		to: req.body.email,
		subject: 'TROJANS event registration',
		html: output
	};

	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.json('error');
		}
		res.status(200).json({
			otp
		});
	});
};
