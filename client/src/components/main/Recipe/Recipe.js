import React, { useState } from "react";
import "./Recipe.scss";
import PropTypes from "prop-types";

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
	calories,
	fats,
	carbs,
	proteins,
}) => {
	const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);

	const handleShowMore = () => {
		setIsMoreInfoVisible(!isMoreInfoVisible);
	};

	return (
		<div className="recipe">
			<div className="background">
				{image ? <img src={image} alt="Dish" /> : null}
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
							<div className="nutritions-value">{calories}</div>
							<div className="nutritions-name">Calories</div>
						</div>
						<div className="nutritions-container">
							<div className="nutritions-value">{fats}</div>
							<div className="nutritions-name">Fats</div>
						</div>
						<div className="nutritions-container">
							<div className="nutritions-value">{carbs}</div>
							<div className="nutritions-name">Carbs</div>
						</div>
						<div className="nutritions-container">
							<div className="nutritions-value">{proteins}</div>
							<div className="nutritions-name">Proteins</div>
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

Recipe.defaultProps = {
	image: undefined,
	rating: 0,
	name: "Not named yet",
	subtitle: "No subtitle yet",
	difficulty: 0,
	time: "PT30M",
	favourite: false,
	ingridients: [],
	calories: "-",
	fats: "-",
	carbs: "-",
	proteins: "-",
};

Recipe.propTypes = {
	image: PropTypes.string,
	rating: PropTypes.number,
	name: PropTypes.string,
	subtitle: PropTypes.string,
	difficulty: PropTypes.number,
	time: PropTypes.string,
	favourite: PropTypes.bool,
	ingridients: PropTypes.array,
	calories: PropTypes.string,
	fats: PropTypes.string,
	carbs: PropTypes.string,
	proteins: PropTypes.string,
};

export default Recipe;
