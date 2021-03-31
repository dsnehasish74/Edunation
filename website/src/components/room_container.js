import {SocketProvider} from '../socket/socketprovider';
import Room from './room'

const RoomContainer=(props)=>{
    const room_id=props.match.params.id;
    return (
        <SocketProvider>
        <Room room_id={room_id}/>
    </SocketProvider>
    );
}

export default RoomContainer;