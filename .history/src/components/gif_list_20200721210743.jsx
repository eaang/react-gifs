import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render () {
    return (
      <div className="gif-list">
        ``
      </div>
      this.props.gifs.map(gif => {
        return <Gif id={gif.id} key={gif.id} />
      })
    );
  }
}

export default GifList;
