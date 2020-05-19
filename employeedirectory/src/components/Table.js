import React from "react";
import Row from './row';
import API from '../api/randomEmployee';


class Table extends React.Component{
    state = {
        result: {},
        search: ''
    };

    componentDidMount() {
        API.search()
          .then(res => console.log ({ result: res.data }))
          .catch(err => console.log(err));
      }
    
    //   showEmployees = query => {
    //     API.search(query)
    //       .then(res => this.setState({ result: res.data }))
    //       .catch(err => console.log(err));
    //   };


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