import React from 'react';
import SearchBar from './SearchBar.css';
//SearchBar.css not exported

class SearchBar extends React.Component{
  render() {
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    )
  }
};

export default SearchBar;
