import { Route } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from 'react-router'
import StoreList from "./store/StoreList"
import CandyList from "./candy/CandyList"
import EmployeeList from "./employee/EmployeeList"
import StoreManager from "../modules/StoreManager"
import CandyManager from "../modules/CandyManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyTypesManager from "../modules/CandyTypesManager"
import StoreDetail from './store/StoreDetail'
import CandyDetail from './candy/CandyDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import "./applicationView.css"

class KandyKorner extends Component {
  state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: []
  }

  componentDidMount() {
    const newState = {}

    StoreManager.getAll().then(stores => (newState.stores = stores))
    EmployeeManager.getAll().then(
      employees => (newState.employees = employees)
    )
    CandyTypesManager.getAll().then(
      candyTypes => (newState.candyTypes = candyTypes)
    )
    CandyManager.getAll()
      .then(candies => (newState.candies = candies))
      .then(() => this.setState(newState))
  }

  deleteStore = id => StoreManager.removeAndList(id)
  .then(StoreManager.getAll)
  .then(stores => {
      this.props.history.push("/stores")
      this.setState({ stores: stores })
  })

  deleteCandy = id => CandyManager.removeAndList(id)
  .then(CandyManager.getAll)
  .then(candies => {
      this.props.history.push("/candies")
      this.setState({ candies: candies })
  })

  deleteEmployee = id => EmployeeManager.removeAndList(id)
  .then(EmployeeManager.getAll)
  .then(employees => {
      this.props.history.push("/employees")
      this.setState({ employees: employees })
  })

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <StoreList
                stores={this.state.stores}
                deleteStore={this.deleteStore}
              />
            )
          }}
        />{" "}
        <Route
          path="/stores/:storeId(\d+)"
          render={props => {
            let store = this.state.stores.find(
              store => store.id === parseInt(props.match.params.storeId)
            )
            if (!store) {
              store = { id: 404, name: "Store Not Found"}
            }
            return (
              <StoreDetail store={store} deleteStore={this.deleteStore} />
            )
          }}
        />{" "}
        <Route
          exact
          path="/employees"
          render={props => {
            return (
              <EmployeeList
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees}
              />
            )
          }}
        />{" "}
        <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            let employee = this.state.employees.find(
              employee => employee.id === parseInt(props.match.params.employeeId)
            )
            if (!employee) {
              employee = { id: 404, name: "employee Not Found"}
            }
            return (
              <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
            )
          }}
        />{" "}
        <Route
          exact
          path="/candies"
          render={props => {
            return (
              <CandyList
                deleteCandy={this.deleteCandy}
                candies={this.state.candies}
                candyTypes={this.state.candyTypes}
              />
            )
          }}
        />{" "}
        <Route
          path="/candies/:candyId(\d+)"
          render={props => {
            let candy = this.state.candies.find(
              candy => candy.id === parseInt(props.match.params.candyId)
            )
            let candyType = this.state.candyTypes.find(candyType => 
              candyType.id === candy.candyTypeId).name
            if (!candy) {
              candy = { id: 404, name: "Candy Not Found"}
            }
            return (
              <CandyDetail candyType={candyType} candy={candy} deleteCandy={this.deleteCandy} />
            )
          }}
        />{" "}
      </React.Fragment>
    )
  }
}
export default withRouter(KandyKorner)