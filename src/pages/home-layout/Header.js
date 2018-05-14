import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home.css";
import Logo from "../../assets/Logo";
import Graph from "../../assets/Graph";
import PieCharts from "../../assets/PieCharts";
import NotesImg from "../../assets/NotesImg";

class HomeHeader extends Component {
	render() {
		return (
			<section className="welcome-con">
				<div className="container welcome">
					<div className="columns is-centered">
						<div className="column logo is-one-third">
							<Logo />
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column logo is-half has-text-centered">
							<h1>Welcome to Bru's Brews</h1>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-6 has-text-centered">
							<p>
								We love beer and know you do to. Below you can
								visualise anything you’ve ever wondered about
								our beers. You can also compare diﬀerent beers
								to see which you would prefer.
							</p>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-2 links has-text-centered">
							<Link to="/">
								<Graph />
								<h4>Brew Data</h4>
							</Link>
						</div>
						<div className="column is-3 links middle-link has-text-centered">
							<Link to="/compare">
								<PieCharts />
								<h4>Compare Brews</h4>
							</Link>
						</div>
						<div className="column is-2 links has-text-centered">
							<Link to="/notes">
								<NotesImg />
								<h4>Brew Notes</h4>
							</Link>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default HomeHeader;
