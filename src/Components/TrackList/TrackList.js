import React from 'react';
import Tracklist from './TrackList.css';
import Track from './Track/Track';

class TrackList extends React.Component{
  render() {
    return (
      <div className="TrackList">
      <Track track={this.props.tracks.map(
        track.id= '',
        this.props.track.name,
        this.props.track.artist,
        this.props.track.album
      )} onAdd={this.props.onAdd}/>
      /*You will add a map method that renders a set of Track components*/
      /*times 3 vvvv*/
      name: radiohead,
      song title: creep,

      </div>
    )
  }
};

export default TrackList;
