import React, { Component } from 'react';

class Gif extends Component {
  selectGif = (event) => {
    console.log(event);
    const { select } = this.props;
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={() => {this.props.handleClick}} />
    );
  }
}

export default Gif;
