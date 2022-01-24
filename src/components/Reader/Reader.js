import { Component } from 'react';
import { getPublications, deletePublication } from '../../services/publications-api';

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

  deleteItem = async () => {
    const { index, items } = this.state;
    const currentItem = items[index];
    try {
      await deletePublication(currentItem.id);

      this.setState(prevState => {
        const checkLast = prevState.index + 1 === prevState.items.length ? true : false;

        return {
          items: prevState.items.filter(item => item.id !== currentItem.id),
          index: checkLast ? prevState.index - 1 : prevState.index,
        };
      });
    } catch (error) {}
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
                <button type="button" onClick={this.deleteItem}>
                  Remove article
                </button>
              </article>
            )}
          </>
        )}
      </div>
    );
  }
}
