import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

class ByType extends Component {
	constructor() {
		super();
		this.state = {
			beerTypes: [
				{
					type: "IPA",
					numType: 0
				},
				{
					type: "Lager",
					numType: 0
				},
				{
					type: "Weisse",
					numType: 0
				},
				{
					type: "Pilsner",
					numType: 0
				}
			],
			Yeasts: [
				{
					yeast: "2007",
					averageABV: 0
				},
				{
					yeast: "1056",
					averageABV: 0
				},
				{
					yeast: "3711",
					averageABV: 0
				},
				{
					yeast: "3522",
					averageABV: 0
				},
				{
					yeast: "1010",
					averageABV: 0
				},
				{
					yeast: "s189",
					averageABV: 0
				}
			]
		};
	}
	render() {
		return (
			<Doughnut
				data={{
					labels: this.state.beerTypes.map(b => b.type),
					datasets: [
						{
							label: "# of Types",
							data: this.state.beerTypes.map(b => b.numType),
							backgroundColor: [
								"#F43729",
								"#F3A715",
								"#c8f2e5",
								"#7DC193"
							],
							borderColor: "black",
							borderWidth: 5
						}
					]
				}}
				height={250}
				options={{
					title: {
						display: true,
						text: "Different Types of Beers",
						fontSize: "18",
						fontFamily: "'Open Sans', 'sans-serif'",
						fontColor: "black",
						padding: 40
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 0,
							bottom: 20
						}
					},
					legend: {
						position: "right"
					}
				}}
			/>
		);
	}
	componentWillMount() {
		this.state.beerTypes.forEach(async beer => {
			this._updateNumBeersByType(
				beer.type,
				await this._getMatchingBeersByType(beer.type)
			);
		});
	}

	_updateNumBeersByType(type, matchingBeers) {
		const beerTypes = [...this.state.beerTypes];

		beerTypes.forEach(beer => {
			if (beer.type === type) {
				beer.numType = matchingBeers.length;
			}
		});

		this.setState({ beerTypes: beerTypes });
	}
	async _getMatchingBeersByType(type) {
		const result = await axios({
			method: "get",
			url: `https://api.punkapi.com/v2/beers`,
			params: {
				beer_name: `${type}`
			}
		});

		const matchingBeers = result.data;
		return matchingBeers;
	}
}
export default ByType;
