import React, { Component } from "react";

import "../css/Home.css";
import HomeHeader from "./home-layout/Header";
import HomeHistory from "./home-layout/History";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<HomeHeader />
				<HomeHistory />
			</div>
		);
	}
}

export default Home;
