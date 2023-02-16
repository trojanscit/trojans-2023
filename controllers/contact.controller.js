const nodemailer = require('nodemailer');

exports.contactPost = async (req, res) => {
	const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.gmail.com',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	});

	let mailOptions = {
		from: process.env.EMAIL,
		to: req.body.email,
		subject: 'Customer Contact Request',
		html: output
	};

	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.json('error');
		}
		res.status(200).json('success');
	});
};
