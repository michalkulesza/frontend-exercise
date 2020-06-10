import React from "react";
import PropTypes from "prop-types";
import "./Info.scss";

import { GiCookingPot } from "react-icons/gi";
import { AiFillClockCircle } from "react-icons/ai";

const Info = ({ difficulty, time }) => {
	const difficultyValue = () => {
		if (difficulty === 0) {
			return "VERY EASY";
		} else if (difficulty === 1) {
			return "EASY";
		} else if (difficulty === 2) {
			return "MEDIUM";
		} else if (difficulty === 3) {
			return "HARD";
		} else {
			return "-";
		}
	};

	const timeValue = () => {
		return time.match(/\d+/g);
	};

	return (
		<div className="info">
			<div className="info-container">
				<div className="info-icon">
					<GiCookingPot />
				</div>
				<div className="info-value">{difficultyValue()}</div>
			</div>
			<div className="info-container">
				<div className="info-icon-time">
					<AiFillClockCircle />
				</div>
				<div className="info-value">{`${timeValue()}m`}</div>
			</div>
			<div className="info-icon"></div>
			<div className="info-value"></div>
		</div>
	);
};

Info.defaultProps = {
	difficulty: 0,
	time: "PT30M",
};

Info.propTypes = {
	difficulty: PropTypes.number,
	time: PropTypes.string,
};

export default Info;
