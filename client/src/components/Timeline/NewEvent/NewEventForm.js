import React, { Component } from "react";
import axios from "axios";

export default class NewEventForm extends Component {
  state = {
    name: "",
    date: "",
    description: ""
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    try {
      let response = await fetch(`/event/${this.props.userId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({
          name: this.state.name,
          date: this.state.date,
          description: this.state.description
        })
      })
      
      let responseJSON = await response.json();

      console.log(responseJSON);

      return responseJSON;
    } catch(err) {
      console.error(err)
    }
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="new_event_wrapper">
          <form onSubmit={this.handleFormSubmit}>
            <h3>Add an Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
            <input
              type="date"
              placeholder="Event Date"
              value={this.state.date}
              onChange={this.handleChange}
              name="date"
            />
            <textarea
              type="textarea"
              placeholder="Event Description. You can make this as long as you want."
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
