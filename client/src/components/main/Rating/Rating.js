import React from "react";

import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

const Rating = ({ rating }) => {
	let stars = [];

	if (rating !== null) {
		let roundedRating = Math.round(rating * 2) / 2;

		for (let i = roundedRating; i > 0; i--) {
			if (i >= 1) {
				stars.push(<MdStar />);
			} else {
				stars.push(<MdStarHalf />);
			}
		}

		for (let i = 5 - roundedRating; i > 0; i--) {
			if (i !== 0.5) {
				stars.push(<MdStarBorder />);
			}
		}
	} else {
		for (let i = 5; i > 0; i--) {
			stars.push(<MdStarBorder />);
		}
	}

	return (
		<>
			{stars}
			<span>{rating ? rating : 0}</span>
		</>
	);
};

export default Rating;
