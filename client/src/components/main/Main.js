import React from "react";
import "./Main.scss";
import uuid from "react-uuid";

import Recipe from "./Recipe/Recipe";

import photos from "../../photos.json";
import data from "../../recipes.json";

import getRandomNumber from "../../functions/misc";

const Main = () => {
	return (
		<div className="main">
			<section className="header">
				<div className="header__container">
					<div className="header__title">
						Recipes for All Tastes and Occasions
					</div>
					<div className="header__description">
						Choose from over 2,500 lunch or dinner recipes paired with easy,
						step-by-step instructions specially created by our chefs.
					</div>
				</div>
			</section>
			<section className="recipes">
				<div className="recipes__container">
					{data.map(recipe => (
						<Recipe
							key={uuid()}
							image={photos[getRandomNumber(8)]}
							rating={recipe.rating}
							name={recipe.name}
							difficulty={recipe.difficulty}
							time={recipe.time}
							favourite={false}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Main;
