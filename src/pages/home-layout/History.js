import React, { Component } from "react";
import axios from "axios";
import "../../css/Home.css";
import { Line } from "react-chartjs-2";

class HomeHistory extends Component {
	constructor() {
		super();
		this.state = {
			beers: [
				{
					year: 2009,
					numBeers: 0
				},
				{
					year: 2010,
					numBeers: 0
				},
				{
					year: 2011,
					numBeers: 0
				},
				{
					year: 2012,
					numBeers: 0
				},
				{
					year: 2013,
					numBeers: 0
				},
				{
					year: 2014,
					numBeers: 0
				},
				{
					year: 2015,
					numBeers: 0
				},
				{
					year: 2016,
					numBeers: 0
				}
			]
		};
	}
	render() {
		let yearOfBeer = this.state.beers.find(beer => beer.year === 2010);
		return (
			<section className="history-con">
				<div className="container history">
					<div className="columns is-centered">
						<div className="column is-12 has-text-centered">
							<div className="heading block">
								<h2>History of Bru's Brew</h2>
								<p>Here's a bit of background on Bru's Brew</p>
							</div>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-four-fifths has-text-centered">
							<div className="block">
								<Line
									data={{
										labels: this.state.beers.map(
											b => b.year
										),
										datasets: [
											{
												data: this.state.beers.map(
													b => b.numBeers
												),
												backgroundColor: "#f0a917ff",
												borderColor: "black",
												borderWidth: 5,
												pointBorderWidth: 2
											}
										]
									}}
									options={{
										title: {
											display: true,
											text:
												"Number of beers made per year",
											fontSize: "18",
											fontFamily:
												"'Open Sans', 'sans-serif'",
											fontColor: "black",
											padding: 40
										},
										layout: {
											padding: {
												left: 50,
												right: 25,
												bottom: 25
											}
										},
										legend: {
											display: false
										},
										scales: {
											xAxes: [
												{
													scaleLabel: {
														display: true,
														labelString:
															"years of operation"
													}
												}
											],

											yAxes: [
												{
													scaleLabel: {
														display: true,
														labelString:
															"number of beers"
													},
													ticks: {
														beginAtZero: true,
														max: 30
													}
												}
											]
										}
									}}
								/>
							</div>
						</div>

						<div className="column is-one-fifth has-text-centered">
							<div className="block">
								<h2>
									{this.state.beers
										.map(b => b.numBeers)
										.reduce(function(acc, val) {
											return acc + val;
										})}
								</h2>
								<h6>total number of beers ever made</h6>
							</div>
							<div className="block">
								<h2>{yearOfBeer.numBeers}</h2>
								<h6>number of beers made in 2010</h6>
							</div>
							<div className="block" />
						</div>
					</div>
				</div>
			</section>
		);
	}
	componentWillMount() {
		this.state.beers.forEach(async beer => {
			this._updateNumBeers(
				beer.year,
				await this._getMatchingBeers(beer.year)
			);
		});
	}

	_updateNumBeers(year, matchingBeers) {
		const beers = [...this.state.beers];

		beers.forEach(beer => {
			if (beer.year === year) {
				beer.numBeers = matchingBeers.length;
			}
		});

		this.setState({ beers: beers });
	}
	async _getMatchingBeers(year) {
		const result = await axios({
			method: "get",
			url: `https://api.punkapi.com/v2/beers`,
			params: {
				brewed_after: `01-${year}`,
				brewed_before: `01-${year + 1}`
			}
		});

		const matchingBeers = result.data;
		return matchingBeers;
	}
}
export default HomeHistory;
