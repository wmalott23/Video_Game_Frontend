import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const SalesByYear = ({games}) => {

    function generateChartData() {
        let years = games.map(g => g.year)
        let distinctYears = [...new Set(years)]
        let salesByYear = distinctYears.map(y=>{
            let filteredGames = games.filter(g => g.year == y)
            let gameSales = filteredGames.map(g => g.globalSales)
            let totalSales = gameSales.reduce((total, el) => total + el)
            return [y, totalSales]
        })
        const data = [
            ["Year", "Sales(in millions)"],
            ...salesByYear
        ];
        return data   
    }
    return ( 
        <div>
            <h2 style={{textAlign: "center"}}>Sales by Year</h2>
            <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={generateChartData()}
            />
        </div>
     );
}
 
export default SalesByYear;