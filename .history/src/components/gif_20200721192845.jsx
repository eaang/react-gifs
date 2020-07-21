import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = "https://media1.giphy.com/media/v6aOjy0Qo1fIA/giphy.webp";
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
