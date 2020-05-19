import React from "react";
import Row from './row';
import API from '../api/randomEmployee';


class Table extends React.Component{
    render() {
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Title </th>
                        <th> Email </th>
                        <th> Department </th>
                    </tr>
                </thead>
                <tbody>
                    <Row />
                </tbody>
            </table>
        )
    }

};

export default Table;