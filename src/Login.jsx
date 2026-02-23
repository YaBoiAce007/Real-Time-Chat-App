import { useState } from "react";
import Api from "./Api";
import { useAuthContext } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const [loginData, setLoginData] = useState(
        {
            username: '',
            password: ''
        }
    )

    const { setIsAuthenticated } = useAuthContext();

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData(
            {
                ...loginData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = async () => {

        if(!loginData.username || !loginData.password){
            window.alert('All the fields are required!');
            return;
        }

        if(loginData.password.length<6){
            window.alert('Password must have atleast 6 characters');
            return;
        }

        try {
            const response = await Api.post('/login', loginData, {_isLogin:true});
            window.alert(response.data);
            setIsAuthenticated(true);
            localStorage.setItem("token", response.headers['authorization']);
            console.log(response.headers['authorization']);
            navigate('/', { replace: true });
        } catch (error) {
            window.alert(error.response.data);
        }
    }

    const containerStyle = {
        gap: '2rem',
        border: '2px solid white',
        animation: 'AuthPageDisplayAnimation .5s ease forwards'
    }

    const inputStyle = {
        border: '2px solid white',
        borderRadius: '1rem',
    }

    return (
        <>
            <div style={containerStyle} className={`flex-col bg-font-color center-center fullscreen-display`}>
                <h1>Login</h1>
                <input style={inputStyle} className={`input-text-area auth-input`} type="text" placeholder="Enter username" name="username" onChange={handleChange} />
                <input style={inputStyle} className={`input-text-area auth-input`} type="password" placeholder="Enter password"  name="password" onChange={handleChange} />
                <button className={`btn tran-eff`} onClick={handleSubmit}>
                    Login
                </button>
                <p>
                    Don't have an account yet?
                </p>
                <button className={`btn tran-eff`} onClick={()=>navigate('/register', { replace: true })}>
                    Register
                </button>
            </div>
        </>
    )
}

export default Login;