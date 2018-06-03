import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class ABVGraph extends Component {
	render() {
		return (
			<Bar
				data={{
					labels: this.props.beers.map(b => b.name),
					datasets: [
						{
							data: this.props.beers.map(b => b.ABV),
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
						text: "Alcohol Content of selected brews",
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
									labelString: "Brews"
								}
							}
						],

						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: "Alcohol content in %"
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
}
export default ABVGraph;
