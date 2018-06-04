import React, { Component } from "react";
import "../../css/Notes.scss";

import Note from "./Note";

class NoteList extends Component {
  render() {
    return (
      <div className="notelist">
        <Note notes={this.props.notes} />
      </div>
    );
  }
}

export default NoteList;
