import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (e) => {
    console.log(e.target.value);
  }

  render () {
    return (
      <input type="text" className="form-control form-search" onUpdate={this.handleUpdate} />
    );
  }
}

export default SearchBar;
