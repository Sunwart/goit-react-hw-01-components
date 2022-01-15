import { Component } from 'react';
import './Dropdown.css';

import ColorPicker from '../ColorPicker';
import { colorPickerOptions } from '../data/colorPickerOptions';

class Dropdown extends Component {
  state = { visible: true };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
          {visible ? 'HIDE' : 'SHOW'}
        </button>
        {visible && <ColorPicker options={colorPickerOptions} />}
      </div>
    );
  }
}

export default Dropdown;
