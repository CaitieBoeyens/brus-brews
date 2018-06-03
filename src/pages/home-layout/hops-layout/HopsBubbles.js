import React, {
	Component
} from "react";
import axios from "axios";
import {
	Bubble
} from "react-chartjs-2";

class HopsBubbles extends Component {
	constructor() {
		super();
		this.state = {
			Hops: [{
					name: "Cascade",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Fuggles",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Columbus",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Centennial",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Simcoe",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Amarillo",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Chinook",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Citra",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Ahtanum",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				},
				{
					name: "Crystal",
					numUsed: 0,
					averageABV: 0,
					averageIBU: 0
				}
			]
		};
	}
	render() {
		return ( <
			Bubble data = {
				{
					datasets: [{
							label: this.state.Hops[0].name,
							data: [{
								x: this.state.Hops[0].averageABV,
								y: this.state.Hops[0].averageIBU,
								r: this.state.Hops[0].numUsed
							}],
							backgroundColor: [
								"#F43729"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[1].name,
							data: [{
								x: this.state.Hops[1].averageABV,
								y: this.state.Hops[1].averageIBU,
								r: this.state.Hops[1].numUsed
							}],
							backgroundColor: [
								"#c8f2e5"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[2].name,
							data: [{
								x: this.state.Hops[2].averageABV,
								y: this.state.Hops[2].averageIBU,
								r: this.state.Hops[2].numUsed
							}],
							backgroundColor: [
								"#7DC193"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[3].name,
							data: [{
								x: this.state.Hops[3].averageABV,
								y: this.state.Hops[3].averageIBU,
								r: this.state.Hops[3].numUsed
							}],
							backgroundColor: [
								"#F3A715"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[4].name,
							data: [{
								x: this.state.Hops[4].averageABV,
								y: this.state.Hops[4].averageIBU,
								r: this.state.Hops[4].numUsed
							}],
							backgroundColor: [
								"#221A1C"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[5].name,
							data: [{
								x: this.state.Hops[5].averageABV,
								y: this.state.Hops[5].averageIBU,
								r: this.state.Hops[5].numUsed
							}],
							backgroundColor: [
								"#aaaaaa"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[6].name,
							data: [{
								x: this.state.Hops[6].averageABV,
								y: this.state.Hops[6].averageIBU,
								r: this.state.Hops[6].numUsed
							}],
							backgroundColor: [
								"#F43729"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[7].name,
							data: [{
								x: this.state.Hops[7].averageABV,
								y: this.state.Hops[7].averageIBU,
								r: this.state.Hops[7].numUsed
							}],
							backgroundColor: [
								"#c8f2e5"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[8].name,
							data: [{
								x: this.state.Hops[8].averageABV,
								y: this.state.Hops[8].averageIBU,
								r: this.state.Hops[8].numUsed
							}],
							backgroundColor: [
								"#7DC193"
							],
							borderColor: "black",
							borderWidth: 5
						},
						{
							label: this.state.Hops[9].name,
							data: [{
								x: this.state.Hops[9].averageABV,
								y: this.state.Hops[9].averageIBU,
								r: this.state.Hops[9].numUsed
							}],
							backgroundColor: [
								"#F3A715"
							],
							borderColor: "black",
							borderWidth: 5
						}
					]
				}
			}
			height = {
				100
			}
			options = {
				{
					title: {
						display: true,
						text: "Effect of Hops on Bitterness and Alcohol Content",
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
						xAxes: [{
							scaleLabel: {
								display: true,
								labelString: "Average alcohol content in %"
							}
						}],

						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: "Average bitterness"
							},
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			}
			/>
		);
	}
	componentWillMount() {
		this.state.Hops.forEach(async hops => {
			this._updateValues(
				hops.name,
				await this._getMatchingBeersByHops(hops.name)
			);
		});
	}

	_updateValues(name, matchingBeers) {
		const Hops = [...this.state.Hops];

		Hops.forEach(beer => {
			if (beer.name === name) {
				let averageABV =
					matchingBeers.map(m => m.abv).reduce(function (acc, val) {
						return acc + val;
					}) / matchingBeers.length;
				averageABV = averageABV.toFixed(2) / 1;
				beer.averageABV = averageABV;
				let averageIBU =
					matchingBeers.map(m => m.ibu).reduce(function (acc, val) {
						return acc + val;
					}) / matchingBeers.length;
				averageIBU = averageIBU.toFixed(2) / 1;
				beer.averageIBU = averageIBU;
				beer.numUsed = matchingBeers.length;
			}
		});
		this.setState({
			Hops: Hops
		});
	}
	async _getMatchingBeersByHops(name) {
		const result = await axios({
			method: "get",
			url: `https://api.punkapi.com/v2/beers`,
			params: {
				hops: `${name}`
			}
		});

		const matchingBeers = result.data;
		return matchingBeers;
	}
}
export default HopsBubbles;