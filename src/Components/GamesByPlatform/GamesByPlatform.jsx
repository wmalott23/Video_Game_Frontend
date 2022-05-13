import { Chart } from 'react-google-charts';
import React from 'react';

const GamesByPlatform = ({games}) => {

    function generateChartData(){

        let filteredByGT2013 = games.filter(g => g.year >= 2013) //games since 2013
        
        let platforms = filteredByGT2013.map(g => g.platform)
        
        let distictPlatforms = [...new Set(platforms)]
        
        let platformArrays = distictPlatforms.map(p => {
            
            let allGamePlatforms = filteredByGT2013.filter(g => g.platform === p)

            let gamesByGlobal = allGamePlatforms.map(g => g.globalSales)
            
            let gamesSales = gamesByGlobal.reduce((total, el) => total + el)

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