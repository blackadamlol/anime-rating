import React from 'react';
import './App.css';
import Cards from './component/Cards';
import AnimeData from './component/AnimeData';
import anifindlogo from "./images/anifind_logo.jpg"

function App() {
  return (
    <div className="App">
      <img src={anifindlogo} alt="logo of website"/>
      <div className="card-row">
        {AnimeData.map((anime, index) => (
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
