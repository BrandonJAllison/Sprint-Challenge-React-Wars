import React, { Component } from 'react';
import StarWarsList from './components/StarWarsList.js'



import './App.css';

const btnStyle = {
  margin: '20px',
  bacgkround: 'white',
  borderRadius: '12px',
  height: '50px',
  width: '100px'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      prev: null,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ 
          
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  loadNext = () => {
    this.getCharacters(this.state.next);
  }

  loadPrev = () => {
    this.getCharacters(this.state.previous);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          {this.state.previous === null ? null : (<button style={btnStyle} onClick={this.loadPrev}>Previous</button>)}
          {this.state.next === null ? null : (<button style={btnStyle} onClick={this.loadNext}>Next</button>)}

        </div>
          <div className='character-list'>
            <StarWarsList starwarsChars={this.state.starwarsChars} />
          </div>
      </div>
    );
  }
}


export default App;
