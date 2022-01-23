import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = { pokemonName: '' };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      alert('Oooooooops, wrong name..');
      return;
    }
    this.props.formSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} styles={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
          placeholder="pikachu"
          style={{ padding: 8 }}
        />
        <button type="submit">
          Find Pokemon
          <ImSearch style={{ marginLeft: 8 }} />
        </button>
      </form>
    );
  }
}
