const express = require("express");
const router = express.Router();

const data = require("../recipes.json");

router.get("/api/getdata", async (req, res) => {
	try {
		res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error);
	}
});

module.exports = router;
