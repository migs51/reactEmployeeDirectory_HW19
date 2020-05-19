import React from 'react';
import Table from './Table';
import Row from './Row';
import SearchBar from './SearchBar';
import API from '../api/randomEmployee';

class App extends React.Component {
  render(){
    return (
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
      <div className="ui grid">
          <div className="ui row">
              <div className="sixteen wide column">
                  <Table />
              </div>
          <div className="ui row">
              <div className="sixteen wide column">
                  <Row />
              </div>
          </div>
        </div>
        </div>
      </div>
    
    );
  }
 
};

export default App;
