const express = require("express");
const router = express.Router();

router.get("/api/getData", async (req, res) => {
	res.send("data");
});

module.exports = router;
