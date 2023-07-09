import "./component/Cards.css";
import React from 'react';
import Cards from './component/Cards';
import AnimeData from "./component/AnimeData"

function App() {
  return (
    <div className="App">
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
