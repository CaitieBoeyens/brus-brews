import React, { Component } from "react";

import "../../App.css";
import "../../css/Comparison.css";

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <form onSubmit={this.props.handleSubmit}>
          <div className="columns is-centered">
            <div className="column is-3">
              <input
                type="text"
                name="0"
                className="input is-rounded"
                placeholder="Brew 1"
                value={this.props.beers.name}
                onChange={this.props.handleChange}
              />
            </div>
            <div className="column is-3">
              <input
                type="text"
                name="1"
                className="input is-rounded"
                placeholder="Brew 2"
                value={this.props.beers.name}
                onChange={this.props.handleChange}
              />
            </div>
            <div className="column is-3">
              <input
                type="text"
                name="2"
                className="input is-rounded"
                placeholder="Brew 3"
                value={this.props.beers.name}
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div className="column control has-text-centered">
            <label className="radio">
              <input
                type="radio"
                name="attribute"
                value="all"
                checked={this.props.selectedOption === "all"}
                onChange={this.props.handleChange}
              />
              All
            </label>
            <label className="radio">
              <input
                type="radio"
                name="attribute"
                value="abv"
                checked={this.props.selectedOption === "abv"}
                onChange={this.props.handleChange}
              />
              Alcohol Percentage
            </label>
            <label className="radio">
              <input
                type="radio"
                name="attribute"
                value="ibu"
                checked={this.props.selectedOption === "ibu"}
                onChange={this.props.handleChange}
              />
              Bitterness
            </label>
            <label className="radio">
              <input
                type="radio"
                name="attribute"
                value="ebc"
                checked={this.props.selectedOption === "ebc"}
                onChange={this.props.handleChange}
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
    );
  }
}

export default Filters;
