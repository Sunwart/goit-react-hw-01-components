import { Component } from 'react';

const savedArticleId = 'Saved article ID';

export class Reader extends Component {
  state = { index: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(savedArticleId, this.state.index);
    }
  }

  componentDidMount() {
    const savedId = localStorage.getItem(savedArticleId);
    if (savedId) {
      this.setState({ index: Number(savedId) });
    }
  }

  changeIndex = value => {
    this.setState(prevState => ({ index: prevState.index + value }));
  };

  render() {
    const totalItems = this.props.items.length;
    const currentId = this.state.index;
    const { title, text } = this.props.items[currentId];

    return (
      <div>
        <section>
          <button type="button" disabled={currentId === 0} onClick={() => this.changeIndex(-1)}>
            backward
          </button>
          <button
            type="button"
            disabled={currentId + 1 === totalItems}
            onClick={() => this.changeIndex(1)}
          >
            forward
          </button>
        </section>
        <p>
          {currentId + 1}/{totalItems}
        </p>
        <article>
          <h2>{title}</h2>
          <p>{text} </p>
        </article>
      </div>
    );
  }
}
