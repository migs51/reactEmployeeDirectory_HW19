import React from 'react';


const Row = ({employee}) =>  {
    return (
 
        <tr>
            <td data-label="First Name">{employee.name.first}</td>
            <td data-label="Last Name">{employee.name.last}</td> 
            <td data-label="Title">{employee.gender}</td>
            <td data-label="Email">{employee.email}</td>
            <td data-label="Department">{employee.dob.age}</td>
        </tr>

    )
  
}

export default Row;