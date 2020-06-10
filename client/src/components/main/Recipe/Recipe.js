import React, { useState } from "react";
import "./Recipe.scss";

import Rating from "./Rating/Rating";
import Info from "./Info/Info";
import MoreInfo from "./MoreInfo/MoreInfo";

const Recipe = ({
	image,
	rating,
	name,
	subtitle,
	difficulty,
	time,
	favourite,
	ingridients,
}) => {
	const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);

	const handleShowMore = () => {
		setIsMoreInfoVisible(!isMoreInfoVisible);
	};

	return (
		<div className="recipe">
			<div className="background">
				<img src={image} alt="Dish" />
			</div>
			<div className="overlay">
				<div className="favourite">
					<div className="favourite-text">Add to favourites</div>
				</div>
				<div className="content-container">
					<div className="title">{name}</div>
					<div className="subtitle">{subtitle}</div>
					<div className="nutritions">
						<div className="nutritions-container">
							<div className="nutritions-value">900kcal</div>
							<div className="nutritions-name">Calories</div>
						</div>
						<div className="nutritions-container">
							<div className="nutritions-value">3g</div>
							<div className="nutritions-name">Fat</div>
						</div>
						<div className="nutritions-container">
							<div className="nutritions-value">5g</div>
							<div className="nutritions-name">Carbs</div>
						</div>
						<div className="nutritions-container">
							<div className="nutritions-value">10g</div>
							<div className="nutritions-name">Protein</div>
						</div>
					</div>
					<Info difficulty={difficulty} time={time} />
					<Rating rating={rating} />
				</div>
				<MoreInfo
					isMoreInfoVisible={isMoreInfoVisible}
					handleShowMore={handleShowMore}
					ingridients={ingridients}
				/>
			</div>
		</div>
	);
};

export default Recipe;
