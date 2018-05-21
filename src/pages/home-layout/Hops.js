import React, { Component } from "react";
import "../../css/Home.css";
import HopsBubbles from "./hops-layout/HopsBubbles";

class HomeHops extends Component {
	render() {
		return (
			<section className="types-con">
				<div className="container types">
					<div className="columns is-centered">
						<div className="column is-12 has-text-centered">
							<div className="heading block">
								<h2>Hops</h2>
								<p>
									How hops effects the alcohol content and
									bitterness of our beers
								</p>
							</div>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-12 has-text-centered">
							<div className="block">
								<HopsBubbles />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default HomeHops;
