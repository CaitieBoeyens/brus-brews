import React, { Component } from "react";
import "../../css/Home.css";
import ByType from "./types-layout/ByType";
//import ByIBU from "./types-layout/ByIBU";
import YeastvsABV from "./types-layout/YeastvsABV";

class HomeBeerTypes extends Component {
  render() {
    return (
      <section className="types-con">
        <div className="container types">
          <div className="columns is-centered">
            <div className="column is-12 has-text-centered">
              <div className="heading block">
                <h2>Types of Bru's Brew's Brews</h2>
                <p>Different kinds of beers we make</p>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-6 has-text-centered">
              <div className="block types-charts">
                <ByType />
              </div>
            </div>
            <div className="column is-6 has-text-centered">
              <div className="block types-charts">
                <YeastvsABV />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeBeerTypes;
