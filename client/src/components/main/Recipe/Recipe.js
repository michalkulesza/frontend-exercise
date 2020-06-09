import React from "react";
import "./Recipe.scss";

import Rating from "../Rating/Rating";

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
					<div className="info"></div>
					<div className="rating">
						<Rating rating={rating} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
