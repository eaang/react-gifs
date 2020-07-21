import React, { Component } from 'react';

class GifList extends Component {
  render () {
    return (
      this.props.gifs.map(gif => {
        return <Gif id={gif.id} />
      })
    );
  }
}

export default GifList;
