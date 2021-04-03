import React, { useEffect, useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { useSocket } from '../socket/socketprovider';
import Board from './board.js'
import Editor from './editor.js'
import Browser from './browser.js'
import Quize from './quize.js'
const Room = (props) => {
    const [openPanel, setOpenPanel] = useState(false);
    const [navS, setNav] = useState(1);
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

    const renderView = ()=>{
        if(navS==1){
            return <Editor/>
        }else if(navS==2){
            return <Browser/>
        }else{
            return <Quize/>
        }
    }
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
                    <nav className="nav_right">
                        <ul>
                            <li  onClick={() => setNav(1)}>Edi</li>
                            <li  onClick={() => setNav(2)}>Brow</li>
                            <li  onClick={() => setNav(3)}>Qui</li>
                        </ul>
                    </nav>
                {renderView()}
                </div>
                <button className="close_button" onClick={() => setOpenPanel(false)}>close</button>
            </SlidingPanel>
        </div>
    );
}

export default Room;