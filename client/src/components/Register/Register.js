import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Register = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState(null);

	const displayError = error => {
		setError(error);
		setTimeout(() => {
			setError(null);
		}, 2000);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!RegEx.test(email)) {
			setError("Incorrect e-mail");
			return;
		}
		if (password.length < 6) {
			setError("Password too short");
			return;
		}
		if (password !== password2) {
			setError("Passwords do not match");
			return;
		}

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
				} else {
					displayError("User already exists");
				}
			})
			.catch(err => {
				console.error(err);
				displayError("There has been a problem");
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
						onFocus={() => setError(null)}
					/>
					<input
						className="input-password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						onFocus={() => setError(null)}
					/>
					<input
						className="input-password"
						type="password"
						placeholder="Retype password"
						value={password2}
						onChange={e => setPassword2(e.target.value)}
						onFocus={() => setError(null)}
					/>
					<div className="form-error">{error}</div>
					<button>REGISTER</button>
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
