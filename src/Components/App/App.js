import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.searchResults = {
      playlistName: 'Favorites',
      playlistTracks: [{name}, {artist}, {album}]
     };
  },
  addTrack(track) {
    this.setState(track.id => ({
      this.playlistTracks.state
    }));
  }

  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults SearchResults={this.state.searchResults}/>
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
