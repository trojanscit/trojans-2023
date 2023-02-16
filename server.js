if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sheetsRoute = require('./routes/sheets.route');

// const razorpayRoute = require('./routes/razorpay.route');
const contactRoute = require('./routes/contact.route');
const AuthRoute = require('./routes/auth.route');

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', sheetsRoute);
// app.use('/api', razorpayRoute);
app.use('/api', contactRoute);
app.use('/api', AuthRoute);

app.listen(process.env.PORT, () =>
	console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
);
