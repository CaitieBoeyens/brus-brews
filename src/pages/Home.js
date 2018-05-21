import React, { Component } from "react";

import "../css/Home.css";
import HomeHeader from "./home-layout/Header";
import HomeHistory from "./home-layout/History";
import HomeBeerTypes from "./home-layout/BeerTypes";
//import HomeHops from "./home-layout/Hops";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<HomeHeader />
				<HomeHistory />
				<HomeBeerTypes />
				{/* <HomeHops /> */}
			</div>
		);
	}
}

export default Home;
