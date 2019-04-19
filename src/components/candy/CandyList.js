import React, { Component } from "react"
import { Link } from "react-router-dom"
import candyIcon from "./candyIcon.png"
import "./candy.css"

export default class CandyList extends Component {
    render() {
        return (
            <article className="content">
            <section className="candies">
                <h1>
                    Our Candies
                </h1>
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        <img src={candyIcon} className="icon--candy" alt="Candy Icon" />
                        <Link className="nav-link" to={`/candies/${candy.id}`}>{candy.name}</Link>
                        {" "} is a type of {" "}
                        {
                            this.props.candyTypes.find(candyType => 
                                candyType.id === candy.candyTypeId).name
                        }
                        <p>
                            <button
                                onClick={() => this.props.deleteCandy(candy.id)}
                                className="card-link">Discontinued</button>
                        </p>
                    </div>
                )
            }
            </section>
            </article>
        )
    }
}