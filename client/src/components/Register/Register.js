import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

import displayError from "../../functions";
import { RiLoader4Line } from "react-icons/ri";

const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Register = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState(null);
	const [registering, setRegistering] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		if (registering) {
			return;
		}

		if (!RegEx.test(email)) {
			displayError("Incorrect e-mail", setError);
			return;
		}
		if (password.length < 6) {
			displayError("Password too short", setError);
			return;
		}
		if (password !== password2) {
			displayError("Passwords do not match", setError);
			return;
		}

		setRegistering(true);

		fetch("http://localhost:3001/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then(res => {
				if (res.ok) {
					history.push("/login");
					setRegistering(false);
				} else {
					displayError("User already exists", setError);
				}
			})
			.catch(err => {
				console.error(err);
				setRegistering(false);
				displayError("There has been a problem", setError);
			});
	};

	return (
		<section className="login">
			<div className="container">
				<div className="title">Register</div>
				<form onSubmit={e => handleSubmit(e)}>
					<input
						className="input-email"
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>
					<input
						className="input-password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						className="input-password"
						type="password"
						placeholder="Retype password"
						value={password2}
						onChange={e => setPassword2(e.target.value)}
					/>
					<div className="form-error">{error}</div>
					{registering ? (
						<button className="loading">
							<RiLoader4Line />
						</button>
					) : (
						<button>REGISTER</button>
					)}
				</form>
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
