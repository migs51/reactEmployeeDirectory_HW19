import React from "react";


function Table(props) {
    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Title </th>
                    <th> Age </th>
                    <th> Email </th>
                    <th> Department </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td data-label="Name">James</td>
                <td data-label="Title">24</td>
                <td data-label="Age">Engineer</td>
                <td data-label="Email">24</td>
                <td data-label="Department">Engineer</td>
                </tr>
                <tr>
                <td data-label="Name">James</td>
                <td data-label="Title">24</td>
                <td data-label="Age">Engineer</td>
                <td data-label="Email">24</td>
                <td data-label="Department">Engineer</td>
                </tr>
                <tr>
                <td data-label="Name">James</td>
                <td data-label="Title">24</td>
                <td data-label="Age">Engineer</td>
                <td data-label="Email">24</td>
                <td data-label="Department">Engineer</td>
                </tr>
            </tbody>
        </table>
    )
};

export default Table;