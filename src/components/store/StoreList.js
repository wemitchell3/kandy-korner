import React, { Component } from "react"
import { Link } from "react-router-dom"
import storeIcon from "./storeIcon.png"
import "./store.css"

export default class StoreList extends Component {
    render() {
        return (
            <article className="content">
            <section className="stores">
            <h1>
                Our Stores
            </h1>
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        <img src={storeIcon} className="icon--store" alt="Store Icon" />
                        <Link className="nav-link" to={`/stores/${store.id}`}>{store.name}</Link>
                        <p>
                        {store.address}
                        </p>
                        <button
                                onClick={() => this.props.deleteStore(store.id)}
                                className="card-link">Closed Location</button>
                    </div>
                )
            }
            </section>
            </article>
        )
    }
}