import './App.css';
import React from 'react';
import Cards from './component/Cards';
import naruto from "./images/narutoo.jpg"
import onepiece from "./images/one-p.jpg"
import bleach from "./images/bleach.jpg"
function App() {
  return (
    <div className="App">
      <Cards
        imgsrc={naruto}
        imgalt="Naruto Image"
        title="Anime"
        name="Naruto"
        link="www.zoro.bz" 
      />

      <Cards
        imgsrc={onepiece}
        imgalt="one piece Image"
        title="Anime"
        name="One Piece"
        link="www.zoro.bz" 
      />
      
      <Cards
        imgsrc={bleach}
        imgalt="Bleach Image"
        title="Anime"
        name="Bleach"
        link="www.zoro.bz" 
      />
    </div>
  );
}

export default App;