import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

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
