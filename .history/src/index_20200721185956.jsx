import React, { Component } from 'react';

import '../assets/stylesheets/application.scss';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  onClick={this.props.handleClick}  
}
class GifList extends Component {
  constructor(props) {
    super(props);
  }
}