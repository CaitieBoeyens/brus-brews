import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

class YeastvsABV extends Component {
	constructor() {
		super();
		this.state = {
			Yeasts: [
				{
					name: "Pilsen Lager",
					code: "2007",
					averageABV: 0
				},
				{
					name: "American Ale",
					code: "1056",
					averageABV: 0
				},
				{
					name: "French Saison",
					code: "3711",
					averageABV: 0
				},
				{
					name: "Belgian Ardennes",
					code: "3522",
					averageABV: 0
				},
				{
					name: "American Wheat",
					code: "1010",
					averageABV: 0
				},
				{
					name: "Saflager",
					code: "s189",
					averageABV: 0
				}
			]
		};
	}
	render() {
		return (
			<Bar
				data={{
					labels: this.state.Yeasts.map(y => y.name),
					datasets: [
						{
							data: this.state.Yeasts.map(y => y.averageABV),
							backgroundColor: [
								"#F43729",
								"#c8f2e5",
								"#7DC193",
								"#F3A715",
								"#221A1C",
								"#aaaaaa"
							],
							borderColor: "black",
							borderWidth: 5
						}
					]
				}}
				height={100}
				options={{
					title: {
						display: true,
						text: "Alcohol Content Based on Yeast Used",
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
						display: false
					},
					scales: {
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: "Yeasts"
								}
							}
						],

						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: "Average alcohol content in %"
								},
								ticks: {
									beginAtZero: true
								}
							}
						]
					}
				}}
			/>
		);
	}
	componentWillMount() {
		this.state.Yeasts.forEach(async yeast => {
			this._updateNumBeersByYeast(
				yeast.code,
				await this._getMatchingBeersByYeast(yeast.code)
			);
		});
	}

	_updateNumBeersByYeast(code, matchingBeers) {
		const Yeasts = [...this.state.Yeasts];

		Yeasts.forEach(beer => {
			if (beer.code === code) {
				let averageABV =
					matchingBeers.map(m => m.abv).reduce(function(acc, val) {
						return acc + val;
					}) / matchingBeers.length;
				averageABV = averageABV.toFixed(2);
				beer.averageABV = averageABV;
			}
		});

		this.setState({ Yeasts: Yeasts });
	}
	async _getMatchingBeersByYeast(code) {
		const result = await axios({
			method: "get",
			url: `https://api.punkapi.com/v2/beers`,
			params: {
				yeast: `${code}`
			}
		});

		const matchingBeers = result.data;
		return matchingBeers;
	}
}
export default YeastvsABV;
