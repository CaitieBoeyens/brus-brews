import React, { Component } from "react";
import "../../css/Notes.css";

class NoteForm extends Component {
  render() {
    return (
      <div className="noteform">
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
              {this.props.markupValidation()}
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                onClick={this.props.handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteForm;
