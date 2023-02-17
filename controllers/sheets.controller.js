const { google } = require('googleapis');

exports.sheetsPost = async (req, res) => {
	const {
		name,
		department,
		year,
		college,
		eventType,
		eventName,
	} = req.body;

	const auth = new google.auth.GoogleAuth({
		keyFile: './credentials.json',
		scopes: 'https://www.googleapis.com/auth/spreadsheets'
	});

	const client = await auth.getClient();

	const googleSheets = await google.sheets({ version: 'v4', auth: client });
	await googleSheets.spreadsheets.values
		.append({
			auth,
			spreadsheetId: '1easjHdqC5SXeeBa2hSaiBjJ87Mv6owIRkdMj_gOVqm0',
			range: 'Trojans',
			valueInputOption: 'USER_ENTERED',
			resource: {
				values: [
					[
						name,
						department,
						year,
						eventType,
						eventName,
						college,
					]
				]
			}
		})
		.then((response) => {
			res.status(200).json('ok');
		});
};
