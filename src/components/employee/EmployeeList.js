import React, { Component } from "react"
import { Link } from "react-router-dom"
import employeeIcon from "./employeeIcon.png"
import "./employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <article className="content">
            <section className="employees">
                <h1>
                    Our Employees
                </h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <img src={employeeIcon} className="icon--employee" alt="Employee Icon" />
                        <Link className="nav-link" to={`/employees/${employee.id}`}>{employee.name}</Link>
                        <p>
                        {employee.number}
                        </p>
                        <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Fire Employee</button>
                    </div>
                )
            }
            </section>
            </article>
        )
    }
}