import React, { Component } from "react";

import Sidebar from "./Sidebar/Sidebar";
import AppHeader from "./AppHeader";
import Card from "./Card";
import Spinner from "../Spinner";

export default class Login extends Component {
  state = {
    isLoading: false,
    events: this.props.events,
    activeDate: {
      year: "" && this.props.events[0].year,
      month: "" && this.props.events[0].months[0].month
    }
  };

  handleChangeDate = e => {
    const elem = e.currentTarget;

    if (elem.dataset.year && elem.dataset.month) {
      this.setState({
        activeDate: {
          year: parseInt(elem.dataset.year),
          month: parseInt(elem.dataset.month)
        }
      });
    }
  };

  render() {
    return (
      <div className="timeline_wrapper">
        <Sidebar
          handleChangeDate={this.handleChangeDate}
          events={this.state.events}
          activeDate={this.state.activeDate}
        />
        <main>
          <AppHeader user={this.props.user}/>
          <div className="cards_container">
            {!this.state.hasError ? (
              this.state.events.map((yearObj, i) => (
                <div className="timeline_year_row" key={i}>
                  <h1>{yearObj.year}</h1>
                  <div className="months_row">
                    {yearObj.months.map((monthObj, j) => (
                      <div key={j}>
                        <h4>{monthObj.monthString}</h4>
                        {monthObj.events.map((event, k) => (
                          <article key={k} style={{ marginLeft: "24px" }}>
                            <p>{event.date}</p>
                            <p>{event.name}</p>
                            <p>{event.description}</p>
                          </article>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div>Add an event in the bottom left!</div>
            )}
          </div>
        </main>
      </div>
    );
  }
}
