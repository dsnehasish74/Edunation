import React,{useEffect,useRef} from 'react'
import {useSocket} from '../socket/socketprovider';
const Room = (props)=>{
    const socket = useSocket()
    const room_id=props.room_id;
    const display_ref=useRef();
    useEffect(()=>{
        if (socket == null) return
        console.log(socket);
        socket.emit('joinRoom',{username: "demo", room: room_id});
    },[socket])
    useEffect(()=>{
        if (socket == null) return
        socket.on('message',(msg)=>{
            console.log(msg);
            console.log(display_ref.current.innerText=msg)
        })

        return ()=>socket.off('message');
    },[socket])
    return(
        <h1 ref={display_ref}>Room</h1>
    );
}

export default Room;