import React from "react";
import "./Navbar.scss";

import { ReactComponent as Reactlogo } from "../../assets/HelloFresh_Logo_Horizontal_V2.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__left">
				<div className="navbar__left-logo">
					<Reactlogo />
				</div>
				<nav className="navbar__left-menu">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Recipes</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="navbar__right">
				<button className="navbar__right-button">Log in</button>
			</div>
		</div>
	);
};

export default Navbar;
