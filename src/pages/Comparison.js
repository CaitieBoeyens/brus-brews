import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import "../css/Comparison.css";
import Navbar from "./layout-elements/Navbar";
import Filters from "./comparison-layout/Filters";
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
          name: "",
          ABV: 0,
          IBU: 0,
          EBC: 0
        },
        {
          index: 2,
          name: "",
          ABV: 0,
          IBU: 0,
          EBC: 0
        },
        {
          index: 3,
          name: "",
          ABV: 0,
          IBU: 0,
          EBC: 0
        }
      ],
      selectedOption: "all"
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
      this.setState({
        selectedOption: value
      });
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

  displayGraph() {
    if (this.state.selectedOption === "all") {
      return (
        <div>
          <ABVGraph beers={this.state.beers} />
          <IBUGraph beers={this.state.beers} />
          <EBCGraph beers={this.state.beers} />
        </div>
      );
    } else if (this.state.selectedOption === "abv") {
      return <ABVGraph beers={this.state.beers} />;
    } else if (this.state.selectedOption === "ibu") {
      return <IBUGraph beers={this.state.beers} />;
    } else if (this.state.selectedOption === "ebc") {
      return <EBCGraph beers={this.state.beers} />;
    } else {
      return null;
    }
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
                  Pick your brews and what you would like to know about them
                </p>
                <Filters
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  beers={this.state.beers}
                  selectedOption={this.state.selectedOption}
                />
                {/* block */}
              </div>
              <div className="block">{this.displayGraph()}</div>
              {/* column */}
            </div>
            {/* columns */}
          </div>
          {/* container */}
        </div>
      </div>
    );
  }
}

export default Comparison;
