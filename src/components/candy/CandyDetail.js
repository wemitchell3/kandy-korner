import React, { Component } from "react";
import candyIcon from "./candyIcon.png";
import "./candy.css";

export default class Candy extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="content">
        <div key={this.props.candy.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={candyIcon} className="icon--candy" alt="Candy Icon" />
              {this.props.candy.name} is a type of{" "}
              {this.props.candyType}
              
            </h4>
            <button
              onClick={() => {
                this.setState({ saveDisabled: true }, () =>
                  this.props.deleteCandy(this.props.candy.id)
                );
              }}
              disabled={this.state.saveDisabled}
              className="card-link"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    );
  }
}
