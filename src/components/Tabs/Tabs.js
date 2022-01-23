import { Component } from 'react';

export default class Tabs extends Component {
  state = { activeTabId: 0 };

  shouldComponentUpdate(nextState) {
    return nextState.activeTabId !== this.state.activeTabId;
  }

  setActiveTabId = idx => {
    this.setState({ activeTabId: idx });
  };

  render() {
    const { activeTabId } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabId];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button type="button" key={item.label} onClick={() => this.setActiveTabId(idx)}>
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
          <br />
          <br />
        </div>
      </>
    );
  }
}
