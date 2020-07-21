import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { select } = this.props;
    const { id } = this
    if (select) {
      select(this.props.id);
    }
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={() => {this.handleClick}} />
    );
  }
}

export default Gif;
