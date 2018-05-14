import React, { Component } from "react";
import axios from "axios";
import "../../css/Home.css";

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
						<div className="heading box column is-12 has-text-centered">
							<h2>History of Bru's Brew</h2>
							<p>Here's a bit of background on Bru's Brew</p>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column box is-four-fifths has-text-centered">
							<p>graph</p>
						</div>
						<div className="column is-one-fifth has-text-centered">
							<div className="box">
								<h4>{yearOfBeer.numBeers}</h4>
								<h6>number of beers made in 2010</h6>
							</div>
							<div className="box" />
							<div className="box" />
						</div>
					</div>
				</div>
			</section>
		);
	}
	async componentDidMount() {
		this._updateNumBeers(2010, await this._getMatchingBeers(2010));
	}

	_updateNumBeers(year, matchingBeers) {
		const beers = [...this.state.beers];

		beers.forEach(beer => {
			if (beer.year === year) {
				beer.numBeers = matchingBeers.length;
			}
		});
		debugger;
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
