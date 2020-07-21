import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(event.target.value);
  }

  search = (query) => {
    giphy('iUsQqGmJsOuQsK4cAlvh5Gg8iK1cHgXo').search({
      q: 'query',
      rating: 'g'
    }, function (err, res) {
      console.log(res);
    });
  render () {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
