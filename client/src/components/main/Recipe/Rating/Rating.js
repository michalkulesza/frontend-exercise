import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Rating.scss";
import uuid from "react-uuid";

import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

const Rating = ({ rating, ratedByUser, token, id, handleShowError }) => {
	const [stars, setStars] = useState([]);
	const [userRating, setUserRating] = useState(null);
	const [tempUserRating, setTempUserRating] = useState(null);

	const handleHoverOnStar = e => {
		const currentRatinghover = e.currentTarget.getAttribute("data-rate");
		setTempUserRating(currentRatinghover);
		setStars(generateStars(currentRatinghover));
	};

	const handleMouseLeaveStar = e => {
		userRating
			? setStars(generateStars(userRating))
			: setStars(generateStars(rating));
	};

	const handleStarClick = e => {
		if (token) {
			fetch("http://localhost:3001/api/rate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},

				body: JSON.stringify({
					token: token,
					id: id,
					rating: tempUserRating,
				}),
			})
				.then(res => {
					res.ok && setUserRating(tempUserRating);
				})
				.catch(err => console.error(err));
		} else {
			handleShowError();
		}
	};

	const generateStars = ratingValue => {
		let displayArray = [];

		if (ratingValue !== null) {
			let roundedRating = Math.round(ratingValue * 2) / 2;

			for (let i = roundedRating; i > 0; i--) {
				if (i >= 1) {
					displayArray.push(<MdStar key={uuid()} />);
				} else {
					displayArray.push(<MdStarHalf key={uuid()} />);
				}
			}

			for (let i = 5 - roundedRating; i > 0; i--) {
				if (i !== 0.5) {
					displayArray.push(<MdStarBorder key={uuid()} />);
				}
			}
		} else {
			for (let i = 5; i > 0; i--) {
				displayArray.push(<MdStarBorder key={uuid()} />);
			}
		}

		return displayArray;
	};

	useEffect(() => {
		ratedByUser && setUserRating(ratedByUser);
	}, [ratedByUser]);

	useEffect(() => {
		userRating
			? setStars(generateStars(userRating))
			: setStars(generateStars(rating));
	}, [rating, userRating]);

	return (
		<div className="rating">
			<div className="rating-dynamic">{stars}</div>
			<div className="rating-static">
				<div
					className="rating-star"
					data-rate="1"
					onMouseEnter={e => handleHoverOnStar(e)}
					onMouseLeave={e => handleMouseLeaveStar(e)}
					onMouseDown={e => handleStarClick(e)}
				>
					<MdStarBorder />
				</div>
				<div
					className="rating-star"
					data-rate="2"
					onMouseEnter={e => handleHoverOnStar(e)}
					onMouseLeave={e => handleMouseLeaveStar(e)}
					onMouseDown={e => handleStarClick(e)}
				>
					<MdStarBorder />
				</div>
				<div
					className="rating-star"
					data-rate="3"
					onMouseEnter={e => handleHoverOnStar(e)}
					onMouseLeave={e => handleMouseLeaveStar(e)}
					onMouseDown={e => handleStarClick(e)}
				>
					<MdStarBorder />
				</div>
				<div
					className="rating-star"
					data-rate="4"
					onMouseEnter={e => handleHoverOnStar(e)}
					onMouseLeave={e => handleMouseLeaveStar(e)}
					onMouseDown={e => handleStarClick(e)}
				>
					<MdStarBorder />
				</div>
				<div
					className="rating-star"
					data-rate="5"
					onMouseEnter={e => handleHoverOnStar(e)}
					onMouseLeave={e => handleMouseLeaveStar(e)}
					onMouseDown={e => handleStarClick(e)}
				>
					<MdStarBorder />
				</div>
			</div>
			<span>{rating ? rating : 0}</span>
			<div className="user-rated">
				<span>{userRating ? `(Rated ${userRating})` : "(Not rated yet)"}</span>
			</div>
		</div>
	);
};

Rating.propTypes = {
	rating: PropTypes.number,
	ratedByuser: PropTypes.number,
	token: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	id: PropTypes.string,
};

Rating.defaultProps = {
	rating: null,
	ratedByuser: null,
	token: null,
	id: "",
};

export default Rating;
