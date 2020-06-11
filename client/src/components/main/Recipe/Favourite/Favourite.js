import React from "react";
import "./Favourite.scss";

const Favourite = ({ favouritedByUser, handleFavourite }) => {
	return (
		<div className="favourite">
			{favouritedByUser && favouritedByUser === true ? (
				<div
					className="favourite-text"
					onMouseDown={() => handleFavourite(false)}
				>
					Remove from favourites
				</div>
			) : (
				<div
					className="favourite-text"
					onMouseDown={() => handleFavourite(true)}
				>
					Add to favourites
				</div>
			)}
		</div>
	);
};

export default Favourite;
