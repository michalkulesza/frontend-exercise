import React, { useState, useEffect } from "react";
import "./Main.scss";
import uuid from "react-uuid";

import Recipe from "./Recipe/Recipe";

import { RiLoader4Line } from "react-icons/ri";
import { MdError } from "react-icons/md";

const Main = () => {
	const [data, setData] = useState();
	const [errorLoadingData, setErrorLoadingData] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3001/api/getdata")
			.then(res => res.json())
			.then(data => {
				setData(data);
			})
			.catch(err => {
				setErrorLoadingData(true);
				console.error(err);
			});
	}, []);

	return (
		<div className="main">
			<section className="header">
				<div className="container">
					<div className="title">Recipes for All Tastes and Occasions</div>
					<div className="description">
						Choose from over 2,500 lunch or dinner recipes paired with easy,
						step-by-step instructions specially created by our chefs.
					</div>
				</div>
			</section>
			<section className="recipes">
				<div className="container">
					{data ? (
						data.map(recipe => (
							<Recipe
								key={uuid()}
								image={recipe.image}
								name={recipe.name}
								subtitle={recipe.headline}
								rating={recipe.rating}
								difficulty={recipe.difficulty}
								time={recipe.time}
								favourite={false}
								ingridients={recipe.ingredients}
								calories={recipe.calories}
								fats={recipe.fats}
								carbs={recipe.carbos}
								proteins={recipe.proteins}
							/>
						))
					) : errorLoadingData ? (
						<>
							<div className="error-container">
								<div className="error">
									<MdError />
									<span>Error loading data...</span>
								</div>
							</div>
							<div className="error-container">
								<div className="error">
									<MdError />
									<span>Error loading data...</span>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="loading">
								<span>
									<RiLoader4Line />
								</span>
							</div>
							<div className="loading">
								<span>
									<RiLoader4Line />
								</span>
							</div>
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default Main;
