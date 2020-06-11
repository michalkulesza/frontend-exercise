import React from "react";
import "./Favourite.scss";

const Favourite = ({ favouritedByUser, token, id, setFavouritedByUser }) => {
	const handleFavourite = value => {
		fetch("http://localhost:3001/api/favourite", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},

			body: JSON.stringify({
				token: token,
				id: id,
				favourite: value,
			}),
		})
			.then(res => {
				res.ok && setFavouritedByUser(value);
			})
			.catch(err => console.error(err));
	};

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
