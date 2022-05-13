import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Chart } from "react-google-charts"
import GameGraphDetails from '../GameGraphDetails/GameGraphDetails';

const GameDetails = ({games}) => {

    const [search, setSearch] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const gamesList = games.filter(g => g.name.toLowerCase().includes(search))

        let gamesTable = gamesList.map(g => {
            return ([g.id, g.name, g.year, g.genre, 
                g.platform, g.publisher, g.rank, 
                g.globalSales, g.northAmericaSales, g.europeSales, g.japanSales, g.otherSales]
                )})

        let tableData = [
            ["ID", "Name", "Year", "Genre", "Platform", "Publisher", "Rank", "Global Sales", "North American Sales", "Europe Sales", "Japan Sales", "Other Sales"],
            ...gamesTable
        ]
        // console.log(tableData)
        setData(tableData)
    },[search])

    
    
    return ( 
        <div>
            <SearchBar setSearch={setSearch}/>
            <Chart
            chartType="Table"
            width="100%"
            height="400px"
            data={data}
            />
            <GameGraphDetails />
        </div>
     );
}
 
export default GameDetails;