import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "WXB88TeARFVvi" },
        { id: "q1MeAPDDMb43K" },
        { id: "1iu8uG2cjYFZS6wTxv" },
        { id: "Q94xQWspTUkShljj8P" },
        { id: "JIX9t2j0ZTN9S" },
        { id: "ND6xkVPaj8tHO" },
        { id: "MDJ9IbxxvDUQM" },
        { id: "SgZtvjwcfq0ww" },
        { id: "5QnLIY3OUg2Pu" },
        { id: "GxN4ics7OlvsA" },
      ],
      selectedGifId: "v6aOjy0Qo1fIA"
    };

    search("fluffy cat");
  }

  search = (query) => {
    giphy('iUsQqGmJsOuQsK4cAlvh5Gg8iK1cHgXo').search({
      q: query,
      rating: 'g'
    }, function (err, res) {
      console.log(res);
    });
  }

  render () {
    const { gifs } = this.state;
    const { selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
