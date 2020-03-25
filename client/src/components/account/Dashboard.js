import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Account from "./Account";
import classNames from "classnames";

const Dashboard = ({ auth }) => {
  const [activeTab, setActiveTab] = useState({
    activeTab: "dashboard"
  });

  const changeTab = newTab => {
    setActiveTab({ ...activeTab, activeTab: newTab });
  };

  const dashboardTab = (
    <Fragment>
      <div>
        Dashboard
      </div>
    </Fragment>
  );

  const accountTab = (
    <Fragment>
      <Account />
    </Fragment>
  );

  const renderTab = () => {
    switch (activeTab.activeTab) {
      case "dashboard":
        return dashboardTab;
      case "account":
        return accountTab;
      default:
        return dashboardTab;
    }
  };

  return (
    <div id="dashboard">
      <div className="dashboard-menu">
        <ul className="tabs">
          <li
            onClick={() => changeTab("dashboard")}
            className={classNames({
              active: activeTab.activeTab === "dashboard"
            })}
          >
            Dashboard
          </li>
          <li onClick={() => changeTab("account")} className={classNames({
              active: activeTab.activeTab === "account"
            })}>Account</li>
        </ul>
      </div>
      <div className="dashboard-main">{renderTab()}</div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
