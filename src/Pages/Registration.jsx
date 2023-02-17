// import React from "react";
// // import "../styles/registration.css";
// import {GoogleSpreadsheet} from "google-spreadsheet";

// const Registration = () => {
// 	const SPREADSHEET_ID = "1znyfyuHdWu4tI3EKOQvn59mFwWVfGMResAzM_KyKIEk";
// 	const SHEET_ID = 1832311358;
// 	const CLIENT_EMAIL = "trojans@trojans-377912.iam.gserviceaccount.com";
// 	const PRIVATE_KEY =
// 		"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7e7TlCBuDHBmk\n796Roq9nsSPgPnWcNLwA+iOcoQtycq5YRhb9eIG5p97aB3p4JzBNNc1JvfNxzPRj\ntKBwPdC7aoTpcfrZ+X3c41xhfIqj+yBFySBM8wNQJaZP5WQzhK0mJ1qtHehm2wTz\n8i/n4s2arEnXsCOKzjxYlwInjtf0obUjV2PcfcbOHu/jEEOTY6CTokcD2e0a0IGR\n3MdH/E54rROTWk4sMUKod/dQWjDgCOX+PBUf8rt793kplnkGD/Bd/HJRCcIgN3XL\ngh50HnNPzaO1dVqtxGQ7FI099qq2ocq2K/VO1XWTzQpR8boV3JZnmhrVT458UB8h\nJ19T0qKTAgMBAAECggEADlVqYppIlDEJSuFl6EeCVpCl+AZ+cmdbuk1lfJuZZvIa\nnzgYmN9mN538fTnWJKqGWFjVLZ6epqQvSRIts/cd5r5BlCF5NsIK2+DsFq3xYZEZ\nCgzS8d8gcTe3q+MTUpcBr+mRVqvzMS3shoQNIpLl+j3S1XErfni/B1zgNssGerbi\nnzPJ6Nfcj/ACjriJ2LQq/7Je9tgaa+6FDzZKx6+maEJMOy0LA6Pkawna8eGhGVLW\nJfRx5mWuwqQgP5jtg3NE+CbMDlEodzrm3ES5kZkQym72S+JVIVLpzvPg0BzUlwLY\niHBynXgOgKDuY5jB0qi9LawP6IyPREQ4EY5LgOssIQKBgQDwrd8wBTAwpIeH6Bmt\nNeZurlJoapwfbo20+vZO3OxQj+LQWKtr07L47exdsDs3RYKa6wLbtST6468B6Fpb\nGIoBrEFL6nODnq6YLdrMRScB4CTWoYJfId5rpjJpNbG84aDO5daA+3zZwtXdPsqA\nT17NTI++wCGKNEctvpDnPaZqoQKBgQDHavLyb4Uah0QmnvdGD4VVdpNAqPl6mCiw\n9kW7rtCh0cMpRoXLwNrdcPU1poeC/oq21xuzOvOAdPvbo/zvY3tVs4F0qz6bEO7e\nHjlaMEM4IsB/ETWHthlC5xuHo1QKyL6wSMKjAMWDo9QZm2j15yl3IcW88uXvMGE2\nx880WjGUswKBgAT8tVk7Yko/voc0agPK0CGO/yomu2FzWwBbCuuLbGIm+R40GCk9\n08GQvIsccb2tdQ1cvUxsLn38Zc32UJj+oy1xslCuZQJfMWL54ETHUg2Z5WmFIzxx\naTh10ymW8T3mtvxSiuVVULr6bJAPEwchnedHJNthA9DnUGpEPqBsCJzBAoGAAPF6\nkLcCVCvLoLsjxEsSgGL9M1MZSwEpQB0KG2cqSXmqiKlyvJH+9wkvv7836OC3W0IN\nOX3P5Q2om1NdQOyhirg8poag1y7vUlGmR8zupHdVncRBEpFD8VMSiEO3hA2LCV5u\nvUKlrIe72xsnFfKv+YZJXylu+QCrlQzA6Ch9D40CgYEAtBcLA9+3W3IMnxwMSchg\n/fsQuFpysrJM0eoYz1jSSUmy/BDO9s+TakNJF6+/sW1TZFNBo/MnI0YB5t6tUu4c\nyQ/J8FmSDa6FeQ9Vdj81uFYbBpeVaX/n7EiyCuWbTs05fVRuFYFOrlRaiSIeMrAL\npwHOUIClbO0ICX9Sw2nH264=\n-----END PRIVATE KEY-----\n";
// 	// const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// 	// const SHEET_ID = process.env.REACT_APP_SHEET_ID;
// 	// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
// 	// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

// 	const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// 	const appendSpreadsheet = async (row) => {
// 		try {
// 			await doc.useServiceAccountAuth({
// 				client_email: CLIENT_EMAIL,
// 				private_key: PRIVATE_KEY,
// 			});
// 			// loads document properties and worksheets
// 			await doc.loadInfo();

// 			const sheet = doc.sheetsById[SHEET_ID];
// 			const result = await sheet.addRow(row);
// 		} catch (e) {
// 			console.error("Error: ", e);
// 		}
// 	};

// 	// const newRow = {Name: "new name", Value: "new value"};
// 	const newRow = {
// 		id: 1,
// 		Name: "Prasanna",
// 		Department: "IT",
// 		EventType: "Technical",
// 		EventName: "Rhym Rivalry",
// 		College: "CIT",
// 		Year: 2023,
// 	};

// 	// appendSpreadsheet(newRow);

// 	return (
// 		// <section>
// 		// 	<div className="box">
// 		// 		<div className="form">
// 		// 			<h2>Login</h2>
// 		// 			<div className="inputBox">
// 		// 				<input type="text" required="required" />
// 		// 				<span>Username</span>
// 		// 				<i></i>
// 		// 			</div>
// 		// 			<div className="inputBox">
// 		// 				<input type="password" required="required" />
// 		// 				<span>Password</span>
// 		// 				<i></i>
// 		// 			</div>
// 		// 			<a href="$">
// 		// 				<input type="submit" value="Login" />
// 		// 			</a>
// 		// 		</div>
// 		// 	</div>
// 		// </section>
// 		<>
// 			<button onClick={appendSpreadsheet(newRow)}>Submit</button>
// 		</>
// 	);
// };

// export default Registration;
