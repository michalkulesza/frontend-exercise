const express = require("express");
const router = express.Router();

router.get("/api/register", async (req, res) => {
	try {
		const user = new user(req.body);
		await user.save();
		res.status(201);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
