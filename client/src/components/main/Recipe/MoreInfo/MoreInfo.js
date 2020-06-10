import React from "react";
import "./MoreInfo.scss";
import uuid from "react-uuid";
import PropTypes from "prop-types";

import { MdExpandMore } from "react-icons/md";

const MoreInfo = ({ isMoreInfoVisible, handleShowMore, ingridients }) => {
	return (
		<>
			<div
				className={`more-button ${isMoreInfoVisible ? "moved" : ""}`}
				onMouseDown={() => handleShowMore()}
			>
				<div className="more-icon">
					<MdExpandMore />
				</div>
				<span>{isMoreInfoVisible ? "Show less" : "Show more"}</span>
			</div>
			<div className={`more-info ${isMoreInfoVisible ? "visible" : ""}`}>
				<div className="more-ingridients">
					<div className="more-ingridients-title">Ingridients</div>
					<div className="more-ingridients-list-container">
						<div className="more-ingridients-list">
							<ul>
								{ingridients.map(ingridient => {
									return <li key={uuid()}>{ingridient}</li>;
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MoreInfo;
