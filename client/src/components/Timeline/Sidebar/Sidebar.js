import React, { Component } from "react";
import classNames from "classnames";

import Spinner from "../../Spinner";
import NewEvent from "../NewEvent/NewEvent";

export default class Sidebar extends Component {

  handleAccordian(e) {
    const elem = e.currentTarget;
    const months = elem.nextElementSibling;

    if (elem.classList.contains("accordian-active")) {
      elem.classList.remove("accordian-active");
      months.style.display = "none";
    } else {
      elem.classList.add("accordian-active");
      months.style.display = "block";
    }
  }

  render() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <div className='accordian_container'>
        <div className="accordians-wrapper">
          {this.props.isLoading ? (
            <Spinner />
          ) : (
            Object.keys(this.props.sidebarObject).map((year, i) => (
              <div className="accordian" key={i}>
                <div className="accordian-year" onClick={this.handleAccordian}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.385"
                    height="6.769"
                    viewBox="0 0 6.385 6.769"
                  >
                    <path
                      id="Subtraction_3"
                      data-name="Subtraction 3"
                      d="M204,35.385h0L200.615,29h6.769L204,35.385Z"
                      transform="translate(-29 207.385) rotate(-90)"
                      fill="#313131"
                    />
                  </svg>
                  <span>{" " + year}</span>
                </div>
                <div className="accordian-months">
                  {Object.keys(this.props.sidebarObject[year]).map(
                    (month, i) => (
                      <div
                        key={i}
                        className={classNames({
                          "accordian-month": true,
                          "active-month":
                            this.props.activeDate.year === parseInt(year) &&
                            this.props.activeDate.month === parseInt(month)
                        })}
                        data-eventyear={year}
                        data-eventmonth={month}
                        onClick={this.props.handleChangeDate}
                      >
                        {monthNames[month]}
                        <span>
                          {this.props.sidebarObject[year][month].length} Event
                          {this.props.sidebarObject[year][month].length > 1 &&
                            "s"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        <NewEvent />
      </div>
    );
  }
}
