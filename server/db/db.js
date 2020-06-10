const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Mongo Connected"))
	.catch(err => {
		console.log("Mongo Error");
		throw err;
	});
