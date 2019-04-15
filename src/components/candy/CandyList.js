import React, { Component } from 'react'

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
                        {candy.name}
                        {" "} is a type of {" "}
                        {
                            this.props.candyTypes.find(candyType => 
                                candyType.id === candy.candyTypeId).name
                        }
                        <button
                                onClick={() => this.props.deleteCandy(candy.id)}
                                className="card-link">Discontinued</button>
                    </div>
                )
            }
            </section>
            </article>
        );
    }
}