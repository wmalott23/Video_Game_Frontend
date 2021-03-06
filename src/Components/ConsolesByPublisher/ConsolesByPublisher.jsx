import React from 'react';
import { Chart } from 'react-google-charts';
import "./ConsolesByPublisher.css";

const ConsolesByPublisher = ({games}) => {

    function generateChartData(){
        let publishers = games.map(g => g.publisher)
        let distinctPublishers = [...new Set(publishers)]
        let consoles = games.map(g => g.platform)
        let distinctConsoles = [...new Set(consoles)]
        let consolesByPubs = distinctPublishers.map(p => {
            let consolesByPub = distinctConsoles.map(c => {
                let filteredPubs = games.filter(g => g.publisher == p)
                let filteredConsoles = filteredPubs.filter(g => g.platform == c)
                let gameSales = filteredConsoles.map(g => g.globalSales)
                if(gameSales.length > 0) {
                    let totalSales = gameSales.reduce((total, el) => total + el)
                    return totalSales
                }
                return 0
            })
            return [p, ...consolesByPub]
        })
        const data = [
            ["Publisher", 'DS', 'X360', 'PS3', 'Wii', 'GBA', 'PS2', 'PS', 'SNES', 'NES', 'GB', '3DS', 'PS4', 'N64', 'XB', 'PC', 'XOne', 'WiiU', '2600', 'GC', 'PSP', 'GEN', 'DC', 'PSV', 'SAT', 'SCD', 'WS', 'NG', 'TG16', '3DO', 'GG', 'PCFX'],
            ...consolesByPubs
        ];
        return data
    }

    const options = {
        isStacked: true,
        hAxis: {
            textStyle: {
                fontSize: 10
            }
        },
        chartArea: {
            left: "1%",
        }

    }

    return ( 
        <div className='pub-sales m-1 border border-dark rounded'>
            <h2 style={{textAlign: "center", marginTop: "5px"}}>Publisher's Sales per Console</h2>
            <Chart
            chartType="ColumnChart"
            width="400%"
            height="600px"
            data={generateChartData()}
            options={options}
            />
        </div>
     );
}
 
export default ConsolesByPublisher;