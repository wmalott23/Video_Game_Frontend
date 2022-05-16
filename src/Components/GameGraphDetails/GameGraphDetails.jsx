import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Chart } from 'react-google-charts';


const GameGraphDetails = ({games}) => {

    const [value, setValue] = useState(0)
    const [show, setShow] = useState(false)
    const getGameDataForChart = () => {
        let filteredGames = games.filter(g => g.name.toLowerCase().includes(value))
        console.log(filteredGames)

        let gamesTable = filteredGames.map(g => {
            let namePlatform = `${g.name} on ${g.platform}`
            return (
                [namePlatform, g.globalSales]
            )})
        const data = [
            ["Platform", "Sales(in millions)"],
            ...gamesTable
        ]
        return data
    }
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }
    return ( 
        <div>
            <form onSubmit={handleShow}>
                <input className="rounded" placeholder='Name of the game' onChange={(event) => setValue(event.target.value)}>    
                </input>
                <button className="bg-success text-white rounded">
                    Display
                </button>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="400px"
                        data={getGameDataForChart()}
                    />
                        <button className="btn bg-danger text-white m-1" onClick={handleClose}>Close</button> 
                </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default GameGraphDetails;