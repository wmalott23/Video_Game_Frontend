import React from 'react';
import { Chart } from 'react-google-charts';

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
                    return [c, totalSales]
                }
                return
            })
            let newConsByPub = [`${p} ${consolesByPub[0]}`, `${consolesByPub[1]}`]
            console.log(newConsByPub)
            return newConsByPub
        })

        const data = [
            ["Publisher and Console", "Sales(in millions)"],
            ...consolesByPubs
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
 
export default ConsolesByPublisher;