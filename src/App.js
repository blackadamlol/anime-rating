import React, { useState } from 'react';
import './App.css';
import Cards from './component/Cards';
import AnimeData from './component/AnimeData';
import anifindlogo from "./images/anifind_logo.jpg";
import searchIcon from "./images/search.png";
import login from "./images/login.png"
function App() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAnime = AnimeData.filter((anime) => {
    return anime.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={anifindlogo} alt="logo of website" />
        </div>
        <div className="search-icon" onClick={handleToggleSearch}>
          <img src={searchIcon} alt="search icon" />
        </div>
        <div className="signin">
          <img src={login} alt="logo of sign in"/>
        </div>
      </div>
      {searchVisible && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search anime"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      )}
      <div className="card-row">
        {filteredAnime.map((anime, index) => (
          <Cards
            key={index}
            imgsrc={anime.imgsrc}
            imgalt={anime.imgalt}
            title={anime.title}
            name={anime.name}
            link={anime.links}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
