import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Chart } from 'react-google-charts';


const GameGraphDetails = ({games}) => {

    const [value, setValue] = useState(0)
    const [show, setShow] = useState(false)

    const getGameDataForChart = () => {
        let game = games.filter(g => g.id == value)
        console.log(game)
        let filteredGames = games.filter(g => g.name == game.name)
        console.log(filteredGames)

        let gamesTable = filteredGames.map(g => {
            return (
                [g.platform, g.globalSales]
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
                <input placeholder='Please Enter the ID of the game that you would like to see graph details of' onChange={(event) => setValue(event.target.value)}>
                    
                </input>
                <button variant="secondary">
                    Open
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
                        <button className="btn bg-success align-self-center text-white m-1" onClick={handleClose}>Close</button> 
                </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default GameGraphDetails;