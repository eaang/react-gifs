import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    console.log("hello can you see me");
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
