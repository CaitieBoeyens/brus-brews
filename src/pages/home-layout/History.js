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
	async componentDidMount() {
		this._updateNumBeers(2010, await this._getMatchingBeers(2010));
	}

	_updateNumBeers(year, numBeers) {
		const beers = [...this.state.beers];

		beers.forEach(beer => {
			if (beer.year === year) {
				beer.numBeers = numBeers;
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
