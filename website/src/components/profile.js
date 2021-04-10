import {Redirect,Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {useUser,useUpdateUser} from "../UserProvider/UserProvider.js"

const Profile=(props)=>{

    const user = useUser();
    const toggleUser = useUpdateUser();

    const handleLogout=()=>{
        console.log("hiii");
        localStorage.removeItem("edunation-profile");
        toggleUser();
        props.history.push("/");         
    }

    
    const createRoom=()=>{
        let roomId = uuidv4();
        // console.log(user[0].googleId+"--"+user[0].email);
        // console.log(JSON.parse(user).email);


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:roomId,admin:JSON.parse(user).email}),
        };
        fetch('http://localhost:8000/createroom', requestOptions)
            .then(response => response.json())
            .then(data => props.history.push("/classroom/"+data.roomId));
            
    }

    return(
        <div>
            {(!localStorage.getItem('edunation-profile'))?<Redirect to="/"/>:null}
            {/* <button onClick={toggleUser}>Click me</button>            */}
            <button onClick={handleLogout}>Click me</button>           
            <button onClick={createRoom}>CREATE CLASSROOM</button>
        </div>
    );
}

export default Profile;