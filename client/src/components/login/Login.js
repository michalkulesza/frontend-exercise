import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
	return (
		<section className="login">
			<div className="container">
				<div className="title">Log In</div>
				<form>
					<input className="input-email" type="email" placeholder="E-mail" />
					<input
						className="input-password"
						type="password"
						placeholder="Password"
					/>
				</form>
				<button>LOG IN</button>
				<div className="shortcut">
					Not a member yet?
					<br />
					<Link to="/register">Register here</Link>
				</div>
			</div>
		</section>
	);
};

export default Login;
