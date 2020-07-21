import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render () {
    const gifs = [
      { id: "WXB88TeARFVvi" },
      { id: "" },
      { id: "" },
      { id: "" },
      { id: "" },
      { id: "" },
      { id: "" },
      { id: "" },
      { id: "" },
      { id: "" },
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="v6aOjy0Qo1fIA"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={}/>
        </div>
      </div>
    )
  }
}

export default App;
