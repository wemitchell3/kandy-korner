import React, { Component } from 'react'

export default class StoreList extends Component {
    render() {
        return (
            <section className="stores">
            <h1>
                Our Stores
            </h1>
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        {store.name}
                        <p>
                        {store.address}
                        </p>
                    </div>
                )
            }
            </section>
        );
    }
}