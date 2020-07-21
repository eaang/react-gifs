/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectGif } = this.props;
    const { id } = this.props;
    selectGif(id);
  }

  render () {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} onKeyPress={this.handleKeyPress} />
    );
  }
}

export default Gif;
