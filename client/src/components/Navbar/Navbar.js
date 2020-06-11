import React from "react";
import "./Navbar.scss";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Reactlogo } from "../../assets/HelloFresh_Logo_Horizontal_V2.svg";

const Navbar = ({ token, setToken, setUserData }) => {
	const location = useLocation();
	let currentLocation = location.pathname;

	const handleLogout = () => {
		fetch("http://localhost:3001/api/logout", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		})
			.then(res => {
				if (res.ok) {
					setToken(null);
					setUserData([]);
				} else {
					console.error("Session expired");
				}
			})
			.catch(err => console.error(err));
	};

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
				{currentLocation === "/login" && !token ? (
					<Link to="/register">
						<button className="navbar__right-button">Register</button>
					</Link>
				) : token ? (
					<button className="navbar__right-button" onMouseDown={handleLogout}>
						Log out
					</button>
				) : (
					<Link to="/login">
						<button className="navbar__right-button">Log in</button>
					</Link>
				)}
			</div>
		</div>
	);
};

Navbar.propTypes = {
	token: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Navbar.defaultProps = {
	token: null,
};

export default Navbar;
