import React, { Component } from 'react';

class Gif extends Component {
  selectGif = (event) => {
    const { select } = this.props;
    console.log(event);
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={() => {this.handleClick} />
    );
  }
}

export default Gif;
