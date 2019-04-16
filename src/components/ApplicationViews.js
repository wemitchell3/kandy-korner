import { Route } from "react-router-dom";
import React, { Component } from "react";
import StoreList from "./store/StoreList"; // Import StoreList component
import CandyList from "./candy/CandyList"; // Import CandyList component
import EmployeeList from "./employee/EmployeeList";
import "./applicationView.css";
import StoreManager from "../modules/StoreManager";
import EmployeeManager from "../modules/EmployeeManager";
import CandyManager from "../modules/CandyManager";
import CandyTypesManager from "../modules/CandyTypesManager";

export default class KandyKorner extends Component {
  state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: []
  };

  componentDidMount() {
    const newState = {};

    StoreManager.getAll()
        .then(stores => (newState.stores = stores))
    EmployeeManager.getAll()
        .then(employees => (newState.employees = employees))
    CandyTypesManager.getAll()
        .then(candyTypes => (newState.candyTypes = candyTypes))
    CandyManager.getAll()
        .then(candies => (newState.candies = candies))
        .then(() => this.setState(newState));
  }

  deleteCandy = id => {
    return fetch(`http://localhost:5002/candies/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/candies`))
      .then(e => e.json())
      .then(candies =>
        this.setState({
          candies: candies
        })
      );
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <StoreList stores={this.state.stores} />;
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
        <Route
          path="/candies"
          render={props => {
            return (
              <CandyList
                deleteCandy={this.deleteCandy}
                candies={this.state.candies}
                candyTypes={this.state.candyTypes}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
