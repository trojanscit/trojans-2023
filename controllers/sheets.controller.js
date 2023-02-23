const { google } = require('googleapis');

exports.sheetsPost = async (req, res) => {
	console.log(req.body);
	const {
		name,
		email,
		phone,
		year,
		college,
		events,
	} = req.body;
	const auth = new google.auth.GoogleAuth({
		keyFile: './credentials.json',
		scopes: 'https://www.googleapis.com/auth/spreadsheets'
	});

	const client = await auth.getClient();

	const googleSheets = await google.sheets({ version: 'v4', auth: client });
	const addToExcel = async (length) => {
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
							email,
							phone,
							year,
							Object.keys(events)[length].split('Type')[0],
							events[Object.keys(events)[length]],
							college,
						]]
				}
			}).then(() => {
				if (!(length <= 0))
					addToExcel(length - 1)
				else {

					return res.status(200).json('ok');
				}
			})
	}
	await addToExcel(Object.keys(events).length - 1)
};
