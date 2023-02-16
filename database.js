const mysql = require("mysql");
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	multipleStatements: true,
});

db.connect((err) => {
	if (!err) {
		console.log("MySQL is connected");
	} else {
		console.log("MySQL failed to connect");
		console.log(err);
	}
});

module.exports = db;
