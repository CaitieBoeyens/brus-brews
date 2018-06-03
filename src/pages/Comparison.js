import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import "../css/Comparison.css";
import Navbar from "./layout-elements/Navbar";
import ABVGraph from "./comparison-layout/ABVGraph";
import IBUGraph from "./comparison-layout/IBUGraph";
import EBCGraph from "./comparison-layout/EBCGraph";

class Comparison extends Component {
	constructor() {
		super();
		this.state = {
			beers: [
				{
					index: 1,
					name: "Brew 1",
					ABV: 0,
					IBU: 0,
					EBC: 0
				},
				{
					index: 2,
					name: "Brew 2",
					ABV: 0,
					IBU: 0,
					EBC: 0
				},
				{
					index: 3,
					name: "Brew 3",
					ABV: 0,
					IBU: 0,
					EBC: 0
				}
			],
			graph: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		this._setBeerData();
	}

	handleChange(event) {
		let target = event.target;
		let type = target.type;
		let value = target.value;
		let index = parseInt(target.name, 10);
		if (type === "text") {
			const beers = [...this.state.beers];
			beers[index].name = value.replace(/ /g, "_");
			this.setState({ beers });
		} else if (type === "radio") {
			/* if (target.checked) {
				let selectedOption = target.value;
			}
			this.setState({ graph: selectedOption }); */
			return null;
		}
	}
	async _getBeerByName(name) {
		const result = await axios({
			method: "get",
			url: `https://api.punkapi.com/v2/beers`,
			params: {
				beer_name: `${name}`
			}
		});
		const matchingBeers = result.data[0];
		if (result.data.length > 0) {
			return matchingBeers;
		} else {
			return {
				abv: null,
				ibu: null,
				ebc: null
			};
		}
	}
	async _getBeers([beer_1, beer_2, beer_3]) {
		return await Promise.all([
			this._getBeerByName(beer_1),
			this._getBeerByName(beer_2),
			this._getBeerByName(beer_3)
		]);
	}

	async _setBeerData() {
		const names = this.state.beers.map(b => b.name);
		// eslint-disable-next-line
		const beerData = await this._getBeers(names);

		const beers = [...this.state.beers];
		const updatedBeers = beers.map((b, idx) => ({
			...b,

			ABV: beerData[idx].abv,
			IBU: beerData[idx].ibu,
			EBC: beerData[idx].ebc
		}));

		this.setState({ beers: updatedBeers });
	}

	async componentWillMount() {
		console.log(await this._getBeerNames());
	}

	async _getBeerNames() {
		const result = await axios({
			method: "get",
			url: `https://api.punkapi.com/v2/beers`
		});

		const beerNames = result.data.map(d => d.name);
		return beerNames;
	}

	displayGraph() {
		return (
			<div>
				<ABVGraph beers={this.state.beers} />
				<IBUGraph beers={this.state.beers} />
				<EBCGraph beers={this.state.beers} />
			</div>
		);
	}

	render() {
		return (
			<div className="comparison">
				<Navbar />
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-12 has-text-centered">
							<div className="block heading">
								<h2>Compare some brews</h2>
								<p>
									Pick your brews and what you would like to
									know about them
								</p>
								<div className="filters">
									<form onSubmit={this.handleSubmit}>
										<div className="columns is-centered">
											<div className="column is-3">
												<input
													type="text"
													name="0"
													className="input is-rounded"
													placeholder="Brew 1"
													value={
														this.state.beers[0].name
													}
													onChange={this.handleChange}
												/>
											</div>
											<div className="column is-3">
												<input
													type="text"
													name="1"
													className="input is-rounded"
													placeholder="Brew 2"
													value={
														this.state.beers[1].name
													}
													onChange={this.handleChange}
												/>
											</div>
											<div className="column is-3">
												<input
													type="text"
													name="2"
													className="input is-rounded"
													placeholder="Brew 3"
													value={
														this.state.beers[2].name
													}
													onChange={this.handleChange}
												/>
											</div>
										</div>
										<div className="column control has-text-centered">
											<label className="radio">
												<input
													type="radio"
													name="attribute"
													value="all"
												/>
												All
											</label>
											<label className="radio">
												<input
													type="radio"
													name="attribute"
													value="abv"
												/>
												Alcohol Percentage
											</label>
											<label className="radio">
												<input
													type="radio"
													name="attribute"
													value="ibu"
												/>
												Bitterness
											</label>
											<label className="radio">
												<input
													type="radio"
													name="attribute"
													value="ebc"
												/>
												Darkness
											</label>
										</div>
										<input
											type="submit"
											value="Show me the brews, Bru"
											className="button is-primary is-rounded brew-btn"
										/>
									</form>
								</div>
							</div>
							{/* block */}
							<div className="block">{this.displayGraph()}</div>
						</div>
						{/* column */}
					</div>
					{/* columns */}
				</div>
				{/* container */}
			</div>
		);
	}
}

export default Comparison;
