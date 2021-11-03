import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: 'Fire',
    };

    this.fireHandler = this.fireHandler.bind(this);
    this.psychicHandler = this.psychicHandler.bind(this);
  }

  fireHandler() {
    this.setState({
      filter: 'Fire',
    })
  }

  psychicHandler() {
    this.setState({
      filter: 'Psychic',
    })
  }

  filter(type) {
    return pokemons.filter(pokemon => (
      pokemon.type === type
    ))
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={ this.filter(this.state.filter) } />
        <button onClick={ this.fireHandler }>Fire</button>
        <button onClick={ this.psychicHandler }>Psychic</button>
      </div>
    )
  }
}

export default App;