import React, { useEffect, useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { useSocket } from '../socket/socketprovider';
import Board from './board.js'
import Editor from './editor.js'
const Room = (props) => {
    const [openPanel, setOpenPanel] = useState(false);
    const socket = useSocket()
    const room_id = props.room_id;
    useEffect(() => {
        if (socket == null) return
        console.log(socket);
        socket.emit('joinRoom', { username: "demo", room: room_id });
    }, [socket])
    useEffect(() => {
        if (socket == null) return
        socket.on('message', (msg) => {
            console.log(msg);
        })

        return () => socket.off('message');
    }, [socket])
    return (
        <div>
            <Board id={room_id} />
            <button className="slider_button" onClick={() => setOpenPanel(true)}>Open</button>
            <SlidingPanel
                type={'right'}
                isOpen={openPanel}
                size={50}
                noBackdrop ={true}
            >
                <div className="sidebar_container">
                <Editor />
                </div>
                <button className="close_button" onClick={() => setOpenPanel(false)}>close</button>
            </SlidingPanel>
        </div>
    );
}

export default Room;