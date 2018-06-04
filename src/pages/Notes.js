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
            "I love your beers! thanks so much for giving us more information"
        },
        {
          user: "Alex",
          message: "Great beer!"
        }
      ],
      newMessage: "",
      newUser: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.markupValidation = this.markupValidation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = this.state.newUser;
    let message = this.state.newMessage;

    if (message === "") {
      this.markupValidation();
    } else {
      let formdata = {
        user: user,
        message: message
      };
      this.setState({
        notes: [...this.state.notes, formdata],
        newMessage: "",
        newUser: ""
      });
    }
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }
  markupValidation() {
    return <p class="help is-danger">This field is required</p>;
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
          markupValidation={this.markupValidation}
        />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default Notes;
