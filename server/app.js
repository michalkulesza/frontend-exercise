require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
require("./db/db");
const app = express();

const dataRouter = require("./router/data");
const userRouter = require("./router/user");

app.use(express.json());

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type,Authorization"
	);
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

app.use(dataRouter, userRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
