import React from 'react';
import Track from './Track.css';

class Track extends React.Component{
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>/*track name will go here*/</h3>
          <p>/*track artist will go here--> | <!-- track album will go here*/</p>
        </div>
        <a className="Track-action">{function(){
          isRemoval ? '-' : '+'
        }}</a>
      </div>
    )
  }
};

export default Track;
