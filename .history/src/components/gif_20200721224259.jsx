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
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
