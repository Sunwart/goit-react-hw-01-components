import { Component } from 'react';
import { VideoList } from './VideoList';
import videos from '../data/videos.json';
import { Player } from './Player';

export class Example1 extends Component {
  state = { selectedVideo: null };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div style={{ padding: 24, textAlign: 'left' }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}
