const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/api/register", async (req, res) => {
	try {
		console.log(req.body);
		const user = new User(req.body);
		await user.save();
		res.status(200).send("User created");
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post("/api/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findByCredentials(email, password);
		if (!user) {
			throw new Error("Login failed! Check credentials");
		}
		const token = await user.generateAuthToken();
		const userId = user._id;
		res.send({ token, userId });
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

module.exports = router;
