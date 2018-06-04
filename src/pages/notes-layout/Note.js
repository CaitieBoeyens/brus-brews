import React, { Component } from "react";
import "../../css/Notes.css";

class Note extends Component {
  render() {
    return <div className="note">{this.markupNotes()}</div>;
  }
  markupNotes() {
    let notes = this.props.notes;
    console.log(notes);
    return notes.map(note => {
      return (
        <div className="box block">
          <p>
            <strong>{note.user}</strong>
          </p>
          <p>{note.message}</p>
        </div>
      );
    });
  }
}

export default Note;
