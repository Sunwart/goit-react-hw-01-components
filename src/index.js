import './index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    value: this.props.initialValue,
    isOpen: false,
  };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step, children } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Increment by {step}
          </button>
          <span>{this.state.value}</span>
          <button type="button" onClick={this.handleDecrement}>
            Decrement by {step}
          </button>
        </div>
        <div>
          {isOpen && children}
          <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
        </div>
      </>
    );
  }
}

const TimeButton = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class SomeBtn extends Component {
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
        <TimeButton label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SomeBtn />
    <Counter
      step={5}
      initialValue={20}
      children={<button onClick={event => console.log(event)}>Click me!</button>}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
