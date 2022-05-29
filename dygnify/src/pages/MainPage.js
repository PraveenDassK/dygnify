import React from "react";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.css";

import Tabs from "react-bootstrap/Tabs";
import LoanDetails from "../components/LoanDetails";
import PersonalDetails from "../components/PersonalDetails";
import BusinessDetails from "../components/BusinessDetails";
const MainPage = () => {
  return (
    <div
      style={{
        display: "block",
        padding: 30,
        backgroundColor: "lightgrey",
      }}
    >
      <Tabs defaultActiveKey="peronaldetails">
        <Tab eventKey="peronaldetails" title="PesonalDetails">
          <PersonalDetails />
        </Tab>
        <Tab eventKey="businessdetails" title="BusinessDetails">
          <BusinessDetails />
        </Tab>
        <Tab eventKey="loandetails" title="LoanDetails">
          <LoanDetails />
        </Tab>
      </Tabs>
    </div>
  );
};
export default MainPage;
