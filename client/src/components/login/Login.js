import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.scss";

import displayError from "../../functions";

const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = ({ history, setToken }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		if (!RegEx.test(email)) {
			displayError("Incorrect e-mail", setError);
			return;
		}
		if (password.length < 6) {
			displayError("Password too short", setError);
			return;
		}

		fetch("http://localhost:3001/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					displayError("Please check your login details", setError);
				}
			})
			.then(res => {
				setToken(res.token);
				history.push("/");
			})
			.catch(err => {
				console.error(err);
				displayError("There has been a problem", setError);
			});
	};

	return (
		<section className="login">
			<div className="container">
				<div className="title">Log In</div>
				<form onSubmit={e => handleSubmit(e)}>
					<input
						className="input-email"
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						className="input-password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className="form-error">{error}</div>
					<button>LOG IN</button>
				</form>
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
