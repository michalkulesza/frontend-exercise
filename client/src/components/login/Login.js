import React from "react";
import "./Login.scss";

const Login = () => {
	return (
		<section className="login">
			<div className="container">
				<div className="title">Log In</div>
				<form>
					<input className="input-email" type="email" />
					<input className="input-password" type="password" />
				</form>
				<button>LOG IN</button>
			</div>
		</section>
	);
};

export default Login;
