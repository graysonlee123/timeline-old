import React, { Component } from "react";

import Sidebar from "./Sidebar/Sidebar";
import AppHeader from "./AppHeader";
import Card from "./Card";
import Spinner from "../Spinner";

export default class Login extends Component {
  state = {
    isLoading: true,
    fetchEventsData: [],
    activeDate: {
      year: "",
      month: ""
    }
  };

  componentDidMount = async () => {
    try {
      const events = await fetch("/event/my-events");
      const res = await events.json();

      if (res) {
        console.log(res);

        // Figure out the years
        const accordianLayout = {};

        res &&
          res.forEach(event => {
            const year = new Date(event.date).getFullYear();
            const month = new Date(event.date).getMonth();

            if (accordianLayout[year] === undefined) accordianLayout[year] = {};
            if (accordianLayout[year][month] === undefined)
              accordianLayout[year][month] = [];
            accordianLayout[year][month].push(event);
          });

        console.log(accordianLayout);

        // Render components by setting all the data
        this.setState({
          fetchEventsData: res,
          isLoading: false,
          activeDate: {
            year: new Date(res[0].date).getFullYear(),
            month: new Date(res[0].date).getMonth()
          },
          accordianLayout: accordianLayout
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleChangeDate = e => {
    const elem = e.currentTarget;

    this.setState({
      activeDate: {
        year: elem.dataset.eventyear,
        month: elem.dataset.eventmonth
      }
    });
  };

  render() {
    return (
      <div className="timeline_wrapper">
        <Sidebar
          handleChangeDate={this.handleChangeDate}
          accordianLayout={this.state.accordianLayout}
          isLoading={this.state.isLoading}
          activeDate={this.state.activeDate}
        />
        <main>
          <AppHeader />
          <div className="cards_container">
            {this.state.isLoading ? (
              <Spinner />
            ) : (
              this.state.fetchEventsData.map((event, i) => {
                const { date, name, description } = event;

                return (
                  <Card
                    name={name}
                    date={date}
                    description={description}
                    key={i}
                  />
                );
              })
            )}
          </div>
        </main>
      </div>
    );
  }
}
