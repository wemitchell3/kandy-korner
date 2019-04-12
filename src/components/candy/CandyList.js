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
                    </div>
                )
            }
            </section>
            </article>
        );
    }
}