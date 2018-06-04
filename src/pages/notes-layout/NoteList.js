import React, { Component } from "react";
import "../../css/Notes.scss";

import Note from "./Note";

class NoteList extends Component {
  render() {
    return (
      <section className="section notes">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds has-text-centered">
              <div className="heading block">
                <h2>Heres what some other brus had to say</h2>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="notelist">
                <Note notes={this.props.notes} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NoteList;
