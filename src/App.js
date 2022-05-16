import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GamesByPlatform from './Components/GamesByPlatform/GamesByPlatform';
import GameDetails from './Components/GameDetails/GameDetails';
import SalesByYear from './Components/SalesByYear/SalesByYear';
import ConsolesByPublisher from './Components/ConsolesByPublisher/ConsolesByPublisher';
import 'bootstrap/dist/css/bootstrap.min.css';


//import './App.css';

function App() {

  const [games, setGames] = useState([])
  async function getGames(){
    let request = await axios.get("https://localhost:7260/api/games/")
    setGames(request.data)
  }
  useEffect(() => {
    getGames();
  }, [])

  

  return (
    <div>
      <GamesByPlatform games={games}/>
      <GameDetails games={games}/>
      <SalesByYear games={games}/>
      <ConsolesByPublisher games={games}/>
    </div>
  );
}

export default App;
