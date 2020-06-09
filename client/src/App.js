import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/login" exact component={Login} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
