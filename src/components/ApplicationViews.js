import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from "./store/StoreList"; // Import StoreList component
import CandyList from "./candy/CandyList"; // Import CandyList component
import EmployeeList from './employee/EmployeeList' 
import "./applicationView.css"



export default class KandyKorner extends Component {
    //   Temporary test data that will be moved to a json later
    storeArray = [
      { id: 1, name: "Nashville North Store", address: "500 Circle Way" },
      { id: 2, name: "Nashville South Store", address: "10101 Binary Court" }
    ];
  
    employeeArray = [
      { id: 1, name: "Jessica Younker", number: "8675309" },
      { id: 2, name: "Jordan Nelson", number: "8675309" },
      { id: 3, name: "Zoe LeBlanc", number: "8675309" },
      { id: 4, name: "Blaise Roberts", number: "8675309" }
    ];
  
    candyTypeArray = [
      { id: 1, name: "Chocolate" },
      { id: 2, name: "Gummie" },
      { id: 3, name: "Hard Candy" },
      { id: 4, name: "Chewy" },
      { id: 5, name: "Gum" }
    ];
  
    candyArray = [
      { id: 1, name: "Wonka Bar", candyTypeId: 1 },
      { id: 2, name: "Big League Chew", candyTypeId: 5 },
      { id: 3, name: "Gummie Bears", candyTypeId: 2 },
      { id: 4, name: "Spree", candyTypeId: 3 },
      { id: 5, name: "Butter Finger", candyTypeId: 1 },
      { id: 6, name: "Snickers", candyTypeId: 1 }
    ];
  
    state = {
      stores: this.storeArray,
      employees: this.employeeArray,
      candyTypes: this.candyTypeArray,
      candies: this.candyArray
    };

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}