import React from 'react';
import './App.css';
import Cards from './component/Cards';
import AnimeData from './component/AnimeData';

function App() {
  return (
    <div className="App">
      <h1 className="title">Anime Finder</h1> {/* Add the title with the "title" class */}
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
