import React,{useEffect,useRef} from 'react'
import {useSocket} from '../socket/socketprovider';
import Board from './board.js'
const Room = (props)=>{
    const socket = useSocket()
    const room_id=props.room_id;
    useEffect(()=>{
        if (socket == null) return
        console.log(socket);
        socket.emit('joinRoom',{username: "demo", room: room_id});
    },[socket])
    useEffect(()=>{
        if (socket == null) return
        socket.on('message',(msg)=>{
            console.log(msg);
        })

        return ()=>socket.off('message');
    },[socket])
    return(
        <div>
            <Board id={room_id} />
        </div>
    );
}

export default Room;