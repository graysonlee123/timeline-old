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
    const { events } = this.props;
    console.log("Timeline props: ", events);

    const sidebarObject = {};

    events.forEach(event => {
      const year = new Date(event.date).getFullYear();
      const month = new Date(event.date).getMonth();

      if (sidebarObject[year] === undefined) sidebarObject[year] = {};
      if (sidebarObject[year][month] === undefined)
        sidebarObject[year][month] = [];
      sidebarObject[year][month].push(event);
    });

    // Render components by setting all the data
    this.setState({
      isLoading: false,
      events: events,
      activeDate: {
        year: new Date(events[0].date).getFullYear(),
        month: new Date(events[0].date).getMonth()
      },
      sidebarObject: sidebarObject
    });

    // // From before storing events in redux...
    // try {
    //   const events = await fetch("/event/my-events");
    //   const res = await events.json();
    //   if (res) {
    //     console.log(res);
    //     // Figure out the years
    //     const accordianLayout = {};
    //     res &&
    //       res.forEach(event => {
    //         const year = new Date(event.date).getFullYear();
    //         const month = new Date(event.date).getMonth();
    //         if (accordianLayout[year] === undefined) accordianLayout[year] = {};
    //         if (accordianLayout[year][month] === undefined)
    //           accordianLayout[year][month] = [];
    //         accordianLayout[year][month].push(event);
    //       });
    //     // Render components by setting all the data
    //     this.setState({
    //       fetchEventsData: res,
    //       isLoading: false,
    //       activeDate: {
    //         year: new Date(res[0].date).getFullYear(),
    //         month: new Date(res[0].date).getMonth()
    //       },
    //       accordianLayout: accordianLayout
    //     });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  handleChangeDate = e => {
    const elem = e.currentTarget;

    this.setState({
      activeDate: {
        year: parseInt(elem.dataset.eventyear),
        month: parseInt(elem.dataset.eventmonth)
      }
    });
  };
  render() {
    return (
      <div className="timeline_wrapper">
        <Sidebar
          handleChangeDate={this.handleChangeDate}
          sidebarObject={this.state.sidebarObject}
          isLoading={this.state.isLoading}
          activeDate={this.state.activeDate}
        />
        <main>
          <AppHeader />
          <div className="cards_container">
            {this.state.isLoading ? (
              <Spinner />
            ) : (
              Object.keys(this.state.sidebarObject).map((year, i) => (
                <div className='timeline_year_row' key={i}>
                  <h1>
                    {year}
                  </h1>
                  <div className='month_row'>
                    {year}
                  </div>
                </div>
              ))
              // this.state.events.map((event, i) => {
              //   const { date, name, description, _id: id } = event;

              //   return (
              //     <Card
              //       name={name}
              //       date={date}
              //       description={description}
              //       key={id}
              //     />
              //   );
              // })
            )}
          </div>
        </main>
      </div>
    );
  }
}

// Can do foreach and push matches to events array
const events = [
  {
    year: 2019,
    events: [
      {
        name: 'blah'
      }
    ]
  },
  {
    year: 2010,
    events: [
      {
        name: 'blah'
      }
    ]
  }
]