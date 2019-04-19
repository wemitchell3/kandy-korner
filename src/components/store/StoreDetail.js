import React, { Component } from "react"
import storeIcon from "./storeIcon.png"
import "./store.css"


export default class Store extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="content">
                <div key={ this.props.store.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ storeIcon } className="icon--store" alt="Store Icon" />
                            <p>
                                { this.props.store.name }
                            </p>
                            <p>
                                { this.props.store.address }
                            </p>
                        </h4>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteStore(this.props.store.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}