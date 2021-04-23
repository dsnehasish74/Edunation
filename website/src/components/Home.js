import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { useUpdateUser } from "../UserProvider/UserProvider.js"

const Home = (props) => {
    const toggleUser = useUpdateUser();

    const responseGoogle = (res) => {
        console.log(res.profileObj);
        localStorage.setItem('edunation-profile', JSON.stringify(res.profileObj));
        toggleUser();
        props.history.push("/profile");
    }
    const failResponse = () => {
        alert('Failed to Signin Please try again');
    }
    return (
        <div>
            {
                localStorage.getItem('edunation-profile') ? <Redirect to='/profile' /> : (
                    <div className='signin_container'>
                        <div className='signin_card'>
                            <h3>Click here to signin</h3>
                            <GoogleLogin
                                clientId="433612977406-a6t36uetilmrd9phgcbd3dklmmvb9k06.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={failResponse}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Home;