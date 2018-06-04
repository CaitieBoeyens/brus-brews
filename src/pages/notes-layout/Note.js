import React, { Component } from "react";
import "../../css/Notes.css";

class Note extends Component {
  render() {
    return <div className="note">{this.markupNotes()}</div>;
  }
  markupNotes() {
    let notes = this.props.notes;
    return notes.map(note => {
      return (
        <div key={note.user} className="box block">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  alt="icon"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{note.user}</strong>
                  <br />
                  {note.message}
                </p>
              </div>
            </div>
          </article>
        </div>
      );
    });
  }
}

export default Note;
