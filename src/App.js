import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import GamesByPlatform from './Components/GamesByPlatform/GamesByPlatform';
import { Chart } from 'react-google-charts';
//import './App.css';

function App() {

  const [games, setGames] = useState([])
  const [search, setSearch] = useState([])

  async function getGames(){
    let request = await axios.get("https://localhost:7260/api/games/")
    setGames(request.data)
  }

  async function searchGames() {

  }

  useEffect(() => {
    getGames();
    // console game copies sold since 2013 chart
  }, [])

  

  return (
    <div>
      <SearchBar games={games} setSearch={setSearch}/>
      <GamesByPlatform games={games} />
      {/* {games.map((el) => 
      {
        return (<div>{el.name}</div>)
      })} */}
    </div>
  );
}

export default App;
