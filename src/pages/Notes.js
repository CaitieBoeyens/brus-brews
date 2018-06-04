import React, { Component } from "react";
import "../App.css";
import "../css/Notes.css";

import Navbar from "./layout-elements/Navbar";
import NoteForm from "./notes-layout/NoteForm";
import NoteList from "./notes-layout/NoteList";

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          user: "Caitie",
          message:
            "I love your beers! thanks so much for giving us more information, bru"
        },
        {
          user: "Alex",
          message: "Great beer, bru"
        }
      ],
      newMessage: "",
      newUser: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = this.state.newUser;
    let message = this.state.newMessage;

    let formdata = {
      user: user,
      message: `${message}, bru`
    };
    this.setState({
      notes: [...this.state.notes, formdata],
      newMessage: "",
      newUser: ""
    });
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="Notes">
        <Navbar />
        <NoteForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          message={this.state.newMessage}
          user={this.state.newUser}
        />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default Notes;
