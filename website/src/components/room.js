import React, { useEffect, useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { useSocket } from '../socket/socketprovider';
import Board from './board.js'
import Editor from './editor.js'
import Browser from './browser.js'
import Quize from './quize.js'
import PdfViewer from './pdfviewer';
import {useUser} from "../UserProvider/UserProvider.js"

const Room = (props) => {
    const [openPanel, setOpenPanel] = useState(false);
    const [navS, setNav] = useState(1);
    const socket = useSocket()
    const room_id = props.room_id;
    const user_name = useUser();

    useEffect(() => {
        if (socket == null) return
        console.log(socket);
        socket.emit('joinRoom', { username: JSON.parse(user_name).email, room: room_id });
    }, [socket])

    useEffect(() => {
        if (socket == null) return
        socket.on('message', (msg) => {
            console.log("Inside socket.on");
            console.log(msg);
        })
        console.log("Outside socket.on");

        return () => socket.off('message');
    }, [socket])

    useEffect(() => {
        console.log(socket);
        if (socket == null) return;
        socket.on('Quize', (msg) => {
            console.log("Quiuze.js----Inside socket.on");
            console.log(msg);
        })
        console.log("Outside socket.on");

        return () => socket.off('Quize');
    }, [socket])

    
    const renderView = ()=>{
        if(navS==1){
            return <Editor/>
        }else if(navS==2){
            return <Browser/>
        }else if(navS==3){
            return<PdfViewer/>
        }else{
            return <Quize room_id={room_id}/>
        }
    }
    return (
        <div>
            <Board id={room_id} />
            <div className="footer">
                <div class="copy_button"><input value={room_id} type="text"/><button>Copy</button></div>
                <button className="nav_button">leave</button>
                <button className="nav_button" onClick={() => setOpenPanel(true)}><i class="fas fa-chevron-left fa-3x"></i></button>
            </div>
            <SlidingPanel
                type={'right'}
                isOpen={openPanel}
                size={50}
                noBackdrop ={true}
            >
                <div className="sidebar_container">
                    <div className="nav_right">
                        <ul>
                            <li  onClick={() => setNav(1)}><i class="fas fa-code fa-3x"></i></li>
                            <li  onClick={() => setNav(2)}><i class="fab fa-edge fa-3x"></i></li>
                            <li  onClick={() => setNav(3)}><i class="fas fa-file-pdf fa-3x"></i></li>
                            <li  onClick={() => setNav(4)}><i class="fas fa-user-tag fa-3x"></i></li>
                        </ul>
                    </div>
                {renderView()}
                </div>
                <button className="close_button" onClick={() => setOpenPanel(false)}><i class="fas fa-times-circle"></i></button>
            </SlidingPanel>
        </div>
    );
}

export default Room;