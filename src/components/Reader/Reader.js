import { Component } from 'react';
import { getPublications } from '../../services/publications-api';

export class Reader extends Component {
  state = {
    index: 0,
    items: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const items = await getPublications();
      this.setState({ items, isLoading: false });
    } catch (error) {
      console.log(error); // див. Покемони
    }
  }
  changeIndex = value => {
    this.setState(prevState => ({ index: prevState.index + value }));
  };

  render() {
    const { index, items, isLoading } = this.state;
    const totalItems = items.length;
    const currentItem = items[index];
    return (
      <div>
        {!isLoading && totalItems === 0 && <p>No items!</p>}
        {isLoading && <p>Loading..</p>}
        {!isLoading && totalItems > 0 && (
          <>
            <section>
              <button type="button" disabled={index === 0} onClick={() => this.changeIndex(-1)}>
                backward
              </button>
              <button
                type="button"
                disabled={index + 1 === totalItems}
                onClick={() => this.changeIndex(1)}
              >
                forward
              </button>
            </section>
            <p>
              {index + 1}/{totalItems}
            </p>
            {currentItem && (
              <article>
                <h2>{currentItem.title}</h2>
                <p>{currentItem.text} </p>
              </article>
            )}
          </>
        )}
      </div>
    );
  }
}
