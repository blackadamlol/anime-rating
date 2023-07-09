import './App.css';
import React from 'react';
import Cards from './component/Cards';
import AnimeData from "./component/AnimeData"
function App() {
  return (
    <div className="App">
      <Cards
        imgsrc={AnimeData[0].imgsrc}
        imgalt={AnimeData[0].imgalt}
        title={AnimeData[0].title}
        name={AnimeData[0].name}
        link={AnimeData[0].links}
      />

      <Cards
        imgsrc={AnimeData[1].imgsrc}
        imgalt={AnimeData[1].imgalt}
        title={AnimeData[1].title}
        name={AnimeData[1].name}
        link={AnimeData[1].links}
      />
      
      <Cards
        imgsrc={AnimeData[2].imgsrc}
        imgalt={AnimeData[2].imgalt}
        title={AnimeData[2].title}
        name={AnimeData[2].name}
        link={AnimeData[2].links}
      />

      <Cards
        imgsrc={AnimeData[3].imgsrc}
        imgalt={AnimeData[3].imgalt}
        title={AnimeData[3].title}
        name={AnimeData[3].name}
        link={AnimeData[3].links}
      />
    </div>
  );
}

export default App;