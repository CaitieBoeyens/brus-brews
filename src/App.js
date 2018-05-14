import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom"; //Route to specific link
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Comparison from "./pages/Comparison";

class App extends Component {
	render() {
		return (
			<div className="App">
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/compare" component={Comparison} />
						<Route exact path="/notes" component={Notes} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
