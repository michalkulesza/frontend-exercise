import React from "react";
import "./Navbar.scss";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Reactlogo } from "../../assets/HelloFresh_Logo_Horizontal_V2.svg";

const Navbar = ({ token }) => {
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
				{console.log(token)}
				{currentLocation === "/login" && !token ? (
					<Link to="/register">
						<button className="navbar__right-button">Register</button>
					</Link>
				) : token ? (
					<Link to="/logout">
						<button className="navbar__right-button">Log out</button>
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
