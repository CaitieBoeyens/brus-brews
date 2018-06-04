import React, { Component } from "react";
import "../../css/Notes.css";

class NoteForm extends Component {
  render() {
    let button = "";
    if (this.props.message === "" || this.props.user === "") {
      button = (
        <button
          className="button is-rounded is-primary"
          onClick={this.props.handleSubmit}
          disabled
        >
          Submit
        </button>
      );
    } else {
      button = (
        <button
          className="button is-rounded is-primary"
          onClick={this.props.handleSubmit}
        >
          Submit
        </button>
      );
    }
    return (
      <section className="section note-form">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds has-text-centered">
              <div className="heading block">
                <h2>Lets us know what you think</h2>
                <p>Your feedback is very important to us bru</p>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="box block">
                <form>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Text input"
                        name="newUser"
                        onChange={this.props.handleChange}
                        value={this.props.user}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Textarea"
                        name="newMessage"
                        onChange={this.props.handleChange}
                        value={this.props.message}
                      />
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control"> {button}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NoteForm;
