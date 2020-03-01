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
    return (
      <div className="accordian_container">
        <div className="accordians-wrapper">
          {this.props.events.length > 0 ? (
            this.props.events.map((yearObj, i) => (
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
                  <span>{" " + yearObj.year}</span>
                </div>
                <div className="accordian-months">
                  {yearObj.months.map((monthObj, j) => (
                    <div
                      className={classNames({
                        "accordian-month": true,
                        "active-month":
                          this.props.activeDate.year === yearObj.year &&
                          this.props.activeDate.month === monthObj.month
                      })}
                      key={j}
                      data-year={yearObj.year}
                      data-month={monthObj.month}
                      onClick={this.props.handleChangeDate}
                    >
                      {monthObj.monthString}
                      <span>
                        {monthObj.events.length} Event
                        {monthObj.events.length > 1 && "s"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="accordian">Add a new event below.</div>
          )}
        </div>
        <NewEvent />
      </div>
    );
  }
}
