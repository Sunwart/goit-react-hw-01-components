import { Component } from 'react';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class Pokemon extends Component {
  state = {
    pokemonName: '',
  };

  handleSearchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 16 }}>
        <PokemonForm formSubmit={this.handleSearchFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    );
  }
}
