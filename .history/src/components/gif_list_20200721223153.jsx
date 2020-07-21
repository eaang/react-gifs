import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.} />)}
    </div>
  )
}

class GifList extends Component {
  renderList = () => {
    const { gifs } = this.props;
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} select={gifs.select} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
