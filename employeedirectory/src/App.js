import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './api/randomEmployee';
import Table from './components/Table';

class App extends React.Component {
  render(){
    return (
      <Table />
    )
  }
 
};

export default App;
