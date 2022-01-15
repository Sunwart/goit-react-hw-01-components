import './ColorPicker.css';
import { Component } from 'react';

class ColorPicker extends Component {
  state = { activeOptionId: 0 };

  setActiveId = index => {
    this.setState({ activeOptionId: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionId) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionId } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionId];
    return (
      <div className="ColorPicker">
        <h2>Color Picker</h2>
        <p>Selected color: {label}</p>
        <div className="ColorPicker__container">
          {options.map(({ label, value }, index) => (
            <button
              type="button"
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: value }}
              onClick={() => this.setActiveId(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
