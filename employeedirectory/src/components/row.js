import React from 'react';


class Row extends React.Component {

    render() {
        return (
            <tr>
                <td data-label="firstName">James</td>
                <td data-label="lastName">Smith</td> 
                <td data-label="Title">Engineer</td>
                <td data-label="Email">jsmith@abc.com</td>
                <td data-label="Department">Engineering</td>
            </tr>
        )
    }
}

export default Row;