import React from "react";
import "./FeaturedItem.scss";

const FeaturedItem = ({ image }) => {
	return (
		<div className="featured">
			<div className="featured__background">
				<img src={image} alt="Dish" />
			</div>
			<div className="featured__overlay">
				<div className="featured__favourite"></div>
				<div className="featured__title"></div>
				<div className="featured__info"></div>
				<div className="featured__rating"></div>
			</div>
		</div>
	);
};

export default FeaturedItem;
