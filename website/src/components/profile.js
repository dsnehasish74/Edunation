import {useRef} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useUser, useUpdateUser } from "../UserProvider/UserProvider.js"

const Profile = (props) => {

    const user = useUser();
    const toggleUser = useUpdateUser();
    const inputRef=useRef();

    const handleLogout = () => {
        console.log("hiii");
        localStorage.removeItem("edunation-profile");
        toggleUser();
        props.history.push("/");
    }


    const createRoom = () => {
        let roomId = uuidv4();
        // console.log(user[0].googleId+"--"+user[0].email);
        // console.log(JSON.parse(user).email);


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: roomId, admin: JSON.parse(user).email }),
        };
        fetch('http://localhost:8000/createroom', requestOptions)
            .then(response => response.json())
            .then(data => props.history.push("/classroom/" + data.roomId));
    }

    const handleJoin=()=>{
        const enter_id= inputRef.current.value;
        console.log(enter_id.length);
        if((enter_id.length)!==36){
            alert("Wrong Id");
        }else{
            props.history.push(`/classroom/${enter_id}`);
        }
    }

    return (
        <div>
            {(!localStorage.getItem('edunation-profile')) ? <Redirect to="/" /> : null}
            {/* <button onClick={toggleUser}>Click me</button>            */}
            <div className="signin_container">
                <div className="profile_container">
                    <div className="profile_buttons">
                        <button className="logout" onClick={handleLogout}>Logout</button>
                        <button className="create_classroom" onClick={createRoom}>CREATE CLASSROOM</button>
                    </div>
                    <input ref={inputRef} className="id_input" type="text" placeholder="Enter your class Id"/>
                    <button  className="join_room" onClick={handleJoin}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;