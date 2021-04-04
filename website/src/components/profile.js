import {Redirect} from 'react-router-dom';
const Profile=()=>{

    const handleLogout=()=>{
        console.log("hiii");
        localStorage.removeItem("edunation-profile");
        <Redirect to="/"/>
    }
    return(
        <div>
            {(!localStorage.getItem('edunation-profile'))?<Redirect to="/"/>:null}
            <button onClick={handleLogout}>Click me</button>
        </div>
    );
}

export default Profile;