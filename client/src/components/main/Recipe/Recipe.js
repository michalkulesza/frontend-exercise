import React from "react";
import "./Recipe.scss";

import Rating from "../Rating/Rating";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Recipe = ({ image, rating, name, difficulty, time, favourite }) => {
	return (
		<div className="recipe">
			<div className="recipe__background">
				<img src={image} alt="Dish" />
			</div>

			<div className="recipe__overlay">
				<div className="recipe__favourite">
					{favourite ? <FaHeart /> : <FiHeart />}
				</div>
				<div>
					<div className="recipe__title">{name}</div>
					<div className="recipe__info"></div>
					<div className="recipe__rating">
						<Rating rating={rating} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
