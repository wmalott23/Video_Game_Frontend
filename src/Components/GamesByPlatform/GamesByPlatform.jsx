import { Chart } from 'react-google-charts';
import React from 'react';

const GamesByPlatform = ({games}) => {

    function generateChartData(){

        let filteredByGT2013 = games.filter(g => g.year >= 2013) //games since 2013
        
        let platforms = filteredByGT2013.map(g => g.platform) // maps every game, returns every platform for each game

        let distictPlatforms = [...new Set(platforms)] // condenses list of platforms so no duplicates
        
        let platformArrays = distictPlatforms.map(p => { //maps list of distinct platforms (For each platform do this)
            
            let allGamePlatforms = filteredByGT2013.filter(g => g.platform === p) //filter all games after 2013 based on if their platform matches the given platform

            let gamesByGlobal = allGamePlatforms.map(g => g.globalSales) // maps those games to return global sales
            
            let gamesSales = gamesByGlobal.reduce((total, el) => total + el) // sums those sales

            return [p, gamesSales, "silver"]
        })
        
        const data = [
            ["Platform", "Sales(in millions)", { role: "style" }],
            ...platformArrays
        ];
        
        return data    
    }

        return ( 
            <div>
            <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={generateChartData()}
            />
        </div>
     );
}
 
export default GamesByPlatform;