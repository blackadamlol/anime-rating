import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Cards from './component/Cards';
import AnimeData from './component/AnimeData';
import anifindlogo from "./images/anifind_logo.jpg";
import Signup from './component/Signup';
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <Link to="/">
          <img src={anifindlogo} alt="logo of website" />
        </Link>
      </div>
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
      <Signup />
    </div>
  );
}

export default App;
