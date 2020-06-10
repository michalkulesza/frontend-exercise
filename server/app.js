require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();

const dataRouter = require("./router/data");
const authRouter = require("./router/auth");

app.use(express.json());

app.use(dataRouter, authRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
