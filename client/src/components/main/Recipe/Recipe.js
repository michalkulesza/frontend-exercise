import React from "react";
import "./Recipe.scss";

import Rating from "./Rating/Rating";

// import { FaHeart } from "react-icons/fa";
// import { FiHeart } from "react-icons/fi";

const Recipe = ({
	image,
	rating,
	name,
	subtitle,
	difficulty,
	time,
	favourite,
}) => {
	return (
		<div className="recipe">
			<div className="background">
				<img src={image} alt="Dish" />
			</div>
			<div className="overlay">
				<div className="favourite">
					<div className="favourite-text">Add to favourites</div>
				</div>
				<div>
					<div className="title">{name}</div>
					<div className="subtitle">{subtitle}</div>
					<div className="info">
						<div className="info-container">
							<div className="info-value">900kcal</div>
							<div className="info-name">Calories</div>
						</div>
						<div className="info-container">
							<div className="info-value">3g</div>
							<div className="info-name">Fat</div>
						</div>
						<div className="info-container">
							<div className="info-value">5g</div>
							<div className="info-name">Carbs</div>
						</div>
						<div className="info-container">
							<div className="info-value">10g</div>
							<div className="info-name">Protein</div>
						</div>
					</div>
					<div className="rating">
						<Rating rating={rating} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
