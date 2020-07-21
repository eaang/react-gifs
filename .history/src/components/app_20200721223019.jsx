import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };

    this.search("kittens");
  }

  search = (query) => {
    giphy('iUsQqGmJsOuQsK4cAlvh5Gg8iK1cHgXo').search({
      q: query,
      rating: 'g',
      limit: '10'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render = () => {
    const { gifs } = this.state;
    const { selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
