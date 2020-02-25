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
      year: this.props.events[0].year,
      month: this.props.events[0].months[0].month
    }
  }

  componentDidMount = async () => {
  }

  handleChangeDate = e => {
    const elem = e.currentTarget;

    this.setState({
      activeDate: {
        year: parseInt(elem.dataset.year),
        month: parseInt(elem.dataset.month)
      }
    });
  };
  render() {
    return (
      <div className="timeline_wrapper">
        <Sidebar
          handleChangeDate={this.handleChangeDate}
          events={this.state.events}
          isLoading={this.state.isLoading}
          activeDate={this.state.activeDate}
        />
        <main>
          <AppHeader />
          <div className="cards_container">
            {this.state.isLoading ? (
              <Spinner />
            ) : (
              this.state.events.map(
                (yearObj, i) => (
                  <div className='timeline_year_row' key={i}>
                    <h1>
                      {yearObj.year}
                    </h1>
                    <div className='month_row'>
                      {yearObj.year}
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </main>
      </div>
    );
  }
}