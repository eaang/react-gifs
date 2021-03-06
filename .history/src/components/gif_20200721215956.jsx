import React, { Component } from 'react';

class Gif extends Component {
  handleUpdate = (event) => {
    const { search } = this.props;
    search(event.target.value);
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.props.handleClick}/>
    );
  }
}

export default Gif;
