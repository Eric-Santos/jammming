import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        playlistName: '',
        playlistTracks: [
        {name},
        {artist},
        {album}
      ]};
    },
    this.addTrack(track) {
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return this.setState.bind(this);
      }
    }

}
render() {
  return (
    <div >
      <h1> Ja <span className = "highlight" > mmm < /span>ing</h1>
      <div className = "App" >
      <SearchBar onAdd = {this.addTrack}/>
    <
    div className = "App-playlist" >
    <
    SearchResults SearchResults = {
      this.state.searchResults
    }
    /> <
    Playlist playlistName = {
      this.state.playlistName
    }
    playlistTracks = {
      this.state.playlistTracks
    }
    /> <
    /div> <
    /div> <
    /div>
  );
}
}

export default App;
