import React, { Component } from "react";

import "../../css/Home.css";

class HomeHistory extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<section className="history-con">
				<div className="container history">
					<div className="columns is-centered">
						<div className="column is-one third" />
					</div>
				</div>
			</section>
		);
	}
}
export default HomeHistory;
