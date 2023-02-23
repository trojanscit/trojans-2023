const {google} = require("googleapis");

exports.sheetsPost = async (req, res) => {
	console.log(req.body);
	const {name, email, phone, department, college, year, events} = req.body;
	const auth = new google.auth.GoogleAuth({
		keyFile: "./credentials.json",
		scopes: "https://www.googleapis.com/auth/spreadsheets",
	});

	const client = await auth.getClient();

	const googleSheets = await google.sheets({version: "v4", auth: client});
	Objects.keys(events).foreach(async (event) => {
		await googleSheets.spreadsheets.values.append({
			auth,
			spreadsheetId: "1easjHdqC5SXeeBa2hSaiBjJ87Mv6owIRkdMj_gOVqm0",
			range: "Trojans",
			valueInputOption: "USER_ENTERED",
			resource: {
				values: [
					[name, email, phone, department, college, year, event],
				],
			},
		});
	});
	res.status(200).json("ok");
};
