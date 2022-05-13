import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'


const GameGraphDetails = ({games}) => {

    const [value, setValue] = useState(0)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
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
                            <button className="btn bg-success align-self-center text-white m-1" onClick={handleClose}>Close</button> 
                    </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default GameGraphDetails;