import React from "react";
import "./Main.scss";
import uuid from "react-uuid";

import Recipe from "./Recipe/Recipe";
import data from "../../recipes.json";

const Main = () => {
	return (
		<div className="main">
			<section className="header">
				<div className="container">
					<div className="title">Recipes for All Tastes and Occasions</div>
					<div className="description">
						Choose from over 2,500 lunch or dinner recipes paired with easy,
						step-by-step instructions specially created by our chefs.
					</div>
				</div>
			</section>
			<section className="recipes">
				<div className="container">
					{data.map(recipe => (
						<Recipe
							key={uuid()}
							image={recipe.image}
							name={recipe.name}
							subtitle={recipe.headline}
							rating={recipe.rating}
							difficulty={recipe.difficulty}
							time={recipe.time}
							favourite={false}
							ingridients={recipe.ingredients}
							calories={recipe.calories}
							fats={recipe.fats}
							carbs={recipe.carbos}
							proteins={recipe.proteins}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Main;
