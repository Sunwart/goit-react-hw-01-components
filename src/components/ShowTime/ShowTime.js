import { Component } from 'react';

import { TimeButton } from './TimeBtn';

class ShowTime extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  updateMessage = () => {
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <TimeButton label="Show current time" changeMessage={this.updateMessage} />
      </>
    );
  }
}

export default ShowTime;
