import React from 'react';
import Table from './Table';
import Row from './Row';
import SearchBar from './SearchBar';
import Filter from './Filter';
import API from '../api/randomEmployee';





class App extends React.Component {
  state = { results: [] };


  componentDidMount() {
    this.showEmployees();
  }

  componentDidUpdate() {
    this.filterMale();
  }

  showEmployees = async () => {
    const response = await API.get();
    this.setState({ results: response.data.results });
    console.log(response.data.results);
  }

  filterMale = () => {
    const object = this.state.results;
    const arry = object.map((isMale) => {
      if (isMale.gender === 'male') {
        return isMale;
      }
    });
    console.log(arry);
    
  }
  

  render(){
    return (
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
      <Filter  />
      <div className="ui grid">
          <div className="ui row">
              <div className="sixteen wide column">
                  <Table employees={this.state.results}/>
              </div>
          </div>
        </div>
      </div>
    
    );
  }
 
};

export default App;
