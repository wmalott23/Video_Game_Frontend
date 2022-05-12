import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
//import './App.css';

function App() {

  const [games, setGames] = useState([])

  async function getGames(){
    let request = await axios.get("https://localhost:7260/api/games")
    setGames(request.data)
  }

  useEffect(() => {
    getGames();
  }, [])

  return (
    <div>
      <SearchBar />
      {games.map((el) => 
      {
        return (<div>{el.name}</div>)
      })}
    </div>
  );
}

export default App;
