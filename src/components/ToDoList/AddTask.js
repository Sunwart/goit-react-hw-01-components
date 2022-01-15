import { Component } from 'react';

class AddTask extends Component {
  state = { message: '' };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.message} onChange={this.handleChange} />
        <br />
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default AddTask;
