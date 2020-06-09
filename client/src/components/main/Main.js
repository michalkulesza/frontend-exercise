import React from "react";
import "./Main.scss";
import { mostFavourited } from "../../functions/getData";

import Recipes from "./Recipes/Recipes";

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
			<Recipes
				title="Most Popular Meals and Recipes"
				description="Check out our most favorited recipes!"
				featured={true}
				recipesData={mostFavourited()}
			/>
		</div>
	);
};

export default Main;
