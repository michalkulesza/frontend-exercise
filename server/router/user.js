const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");

router.post("/api/register", async (req, res) => {
	try {
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
		const recipes = user.recipes;
		res.send({ token, userId, recipes });
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

router.post("/api/logout", auth, async (req, res) => {
	try {
		req.user.tokens.splice(0, req.user.tokens.length);
		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/api/rate", auth, async (req, res) => {
	try {
		const { id, rating } = req.body;
		const userRecipes = req.user.recipes;
		const recipe = userRecipes.find(recipe => recipe._id === id);

		if (recipe) {
			recipe.rating = rating;
		} else {
			const newRecipe = {
				_id: id,
				favourited: false,
				rating: rating,
			};
			userRecipes.push(newRecipe);
		}

		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/api/favourite", auth, async (req, res) => {
	try {
		const { id, favourite } = req.body;
		const userRecipes = req.user.recipes;
		const recipe = userRecipes.find(recipe => recipe._id === id);

		if (recipe) {
			recipe.favourited = favourite;
		} else {
			const newRecipe = {
				_id: id,
				favourited: true,
				rating: null,
			};
			userRecipes.push(newRecipe);
		}

		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
