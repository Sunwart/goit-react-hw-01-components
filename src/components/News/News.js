import './News.css';
import { Component } from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import ArticleList from './ArticleList';
axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export class News extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await axios.get('/search?query=react');
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div className="News__Container">
        <h2>Hacker News</h2>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <ContentLoader speed={0.5} backgroundColor="teal" foregroundColor="turquoise">
            <rect width="400" height="16" />
          </ContentLoader>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}
