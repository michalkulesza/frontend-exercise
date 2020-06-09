import React from "react";
import "./Recipes.scss";
import uuid from "react-uuid";
import photos from "../../../photos.json";

import FeaturedItem from "./FeaturedItem/FeaturedItem";

import getRandomNumber from "../../../functions/misc";

const Recipes = ({ title, description, featured, recipesData }) => {
	return (
		<section className="recipes">
			<div className="recipes__wrapper">
				<div className="recipes__header">
					<div className="recipes__header-left">
						<div className="recipes__header-title">{title}</div>
						<div className="recipes__header-description">{description}</div>
					</div>
					<div className="recipes__header-right">
						<a href="/">See all</a>
					</div>
				</div>
				<div className="recipes__container">
					<div className="recipes__items">
						{featured
							? recipesData.map(recipe => (
									<FeaturedItem
										key={uuid()}
										image={photos[getRandomNumber(8)]}
									/>
							  ))
							: "nic"}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recipes;
