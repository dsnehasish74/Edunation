import {useState} from 'react'
import DrawingBoard from 'react-drawing-board';
const Board = (props) => {
    const [operations, setOperations] = useState([]);


    return (
        <DrawingBoard
            userId="user1" // identify for different players.
            operations={operations}
            onChange={(newOperation, afterOperation) => {
                setOperations(afterOperation);
            }}
            toolbarPlacement="top"
            style={{overflow: 'hidden',width: '100%'}}
        />
    );
}

export default Board;