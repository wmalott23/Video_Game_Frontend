import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import { Chart } from 'react-google-charts';
//import './App.css';

export const options = {
  title: "Games Sold Worldwide",
  chartArea: { width: "50%" },
  colors: ["#b0120a", "#ffab91"],
  hAxis: {
    title: "Sales (in millions)",
    minValue: 0,
  },
  vAxis: {
    title: "Consoles",
  },
};

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
      <SearchBar />
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
      {games.map((el) => 
      {
        return (<div>{el.name}</div>)
      })}
    </div>
  );
}

export default App;
