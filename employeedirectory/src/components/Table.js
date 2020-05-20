import React from "react";
import Row from './Row';



function Table({employees}) {
    const renderedList = employees.map((employee) => {
        return <Row key={employee.id.value} employee={employee} />
    })
    return (
     
        <table className="ui celled table ui tablet stackable table">
            <thead>
                <tr>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Gender </th>
                    <th> Email </th>
                    <th> Age </th>
                </tr>
            </thead>
            <tbody>
                {renderedList}
            </tbody>
        </table>
         
    )


};

export default Table;