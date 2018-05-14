import React, { Component } from "react";
import axios from "axios";
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
	_fetchResponseCounts() {
		axios({
			method: "get",
			url: "",
			responseType: "stream"
		}).then(function(response) {
			return null;
		});
	}
}

export default Home;
