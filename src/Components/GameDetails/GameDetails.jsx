import React, { useState } from 'react';
import { Chart } from "react-google-charts"

const GameDetails = ({search, games}) => {

    const gamesList = games.filter(g => g.id.includes(search) || )

    let gamesTable = gamesList.map(g => {
        return (g.id, g.name, g.year, g.genre, 
            g.platform, g.publisher, g.rank, 
            g.globalSales, g.northAmericaSales, g.europeSales, g.japanSales, g.otherSales
            )})

    
    const data = [
        ["ID", "Name", "Year", "Genre", "Platform", "Publisher", "Rank", "Global Sales", "North American Sales", "Europe Sales", "Japan Sales", "Other Sales"],
        ...gamesTable
    ];
    
    return ( 
        <Chart
        chartType="Table"
        width="100%"
        height="400px"
        data={data}
        />
     );
}
 
export default GameDetails;