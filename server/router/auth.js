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

module.exports = router;
