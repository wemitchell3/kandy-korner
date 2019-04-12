import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h1>
                    Our Employees
                </h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <p>
                        {employee.number}
                        </p>
                    </div>
                )
            }
            </section>
        );
    }
}