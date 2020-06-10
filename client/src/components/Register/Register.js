import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
	return (
		<section className="login">
			<div className="container">
				<div className="title">Register</div>
				<form>
					<input className="input-email" type="email" placeholder="E-mail" />
					<input
						className="input-password"
						type="password"
						placeholder="Password"
					/>
					<input
						className="input-password"
						type="password"
						placeholder="Retype password"
					/>
				</form>
				<button>REGISTER</button>
				<div className="shortcut">
					Already have an account?
					<br />
					<Link to="/login">Login here</Link>
				</div>
			</div>
		</section>
	);
};

export default Register;
