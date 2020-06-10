import React from "react";
import "./Navbar.scss";
import { useLocation, Link } from "react-router-dom";

import { ReactComponent as Reactlogo } from "../../assets/HelloFresh_Logo_Horizontal_V2.svg";

const Navbar = () => {
	const location = useLocation();
	let currentLocation = location.pathname;

	return (
		<div className="navbar">
			<div className="left">
				<div className="logo">
					<Reactlogo />
				</div>
				<nav className="menu">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Recipes</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="right">
				{currentLocation === "/login" ? (
					<Link to="/register">
						<button className="navbar__right-button">Register</button>
					</Link>
				) : (
					<Link to="/login">
						<button className="navbar__right-button">Log in</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
