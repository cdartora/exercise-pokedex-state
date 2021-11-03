import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()

    this.state = {
      actual: 0,
    }

    this.nextHandler = this.nextHandler.bind(this);
  }

  nextHandler() {
    const {pokemons} = this.props;
    const {actual} = this.state;

    if(actual === pokemons.length - 1) {
      this.setState({
        actual: 0,
      })
    }

    this.setState((previous) => ({
      actual: previous.actual + 1,
    }));
  };

  render() {
    const { pokemons } = this.props;
    const { actual } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemons[actual] } />
        <button onClick={ this.nextHandler }>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;