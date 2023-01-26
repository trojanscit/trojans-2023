if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./database");
const register = require("./routes/register");

app.use("/", register);

app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.PORT}`);
});
