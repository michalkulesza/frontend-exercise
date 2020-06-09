import React from "react";
import "./FeaturedItem.scss";

import Rating from "../Rating/Rating";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const FeaturedItem = ({ image, rating, name, difficulty, time, favourite }) => {
	return (
		<div className="featured">
			<div className="featured__background">
				<img src={image} alt="Dish" />
			</div>
			<div className="featured__overlay">
				<div className="featured__favourite">
					{favourite ? <FaHeart /> : <FiHeart />}
				</div>
				<div>
					<div className="featured__title">{name}</div>
					<div className="featured__info"></div>
					<div className="featured__rating">
						<Rating rating={rating} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
