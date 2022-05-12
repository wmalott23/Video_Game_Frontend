import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
//import './App.css';

function App() {

  const [games, setGames] = useState([])

  const getGames = async() => {
    let request = await axios.get("https://localhost:7260/api/games")
    setGames(request.data)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="App">
      <SearchBar />

    </div>
  );
}

export default App;
