import React, { useState } from "react";
import "./Navbar.scss";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Reactlogo } from "../../assets/HelloFresh_Logo_Horizontal_V2.svg";

import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = ({ token, setToken, setUserData }) => {
	const [mobileMenu, setMobileMenu] = useState(false);
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

	const handleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
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
					<Link to="/register" className="link">
						<button className="button">Register</button>
					</Link>
				) : token ? (
					<button className="button" onMouseDown={handleLogout}>
						Log out
					</button>
				) : (
					<Link to="/login" className="link">
						<button className="button">Log in</button>
					</Link>
				)}
				<div className="menu-mobile-button" onMouseDown={handleMobileMenu}>
					{mobileMenu ? <GrClose /> : <FiMenu />}
				</div>
			</div>
			<div className={mobileMenu ? "menu-mobile visible" : "menu-mobile"}>
				<ul>
					<li>
						<a href="https://hellofresh.com">Home</a>
					</li>
					<li>
						<Link to="/" onMouseDown={() => setMobileMenu(false)}>
							Recipes
						</Link>
					</li>
					<li>
						{currentLocation === "/login" && !token ? (
							<Link to="/register">
								<button
									className="button"
									onMouseDown={() => setMobileMenu(false)}
								>
									Register
								</button>
							</Link>
						) : token ? (
							<button
								className="button"
								onMouseDown={() => {
									handleLogout();
									setMobileMenu(false);
								}}
							>
								Log out
							</button>
						) : (
							<Link to="/login">
								<button
									className="button"
									onMouseDown={() => setMobileMenu(false)}
								>
									Log in
								</button>
							</Link>
						)}
					</li>
				</ul>
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
