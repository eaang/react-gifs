import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = (props) => {
    const { gifs } = this.props;
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} select={props.select} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
