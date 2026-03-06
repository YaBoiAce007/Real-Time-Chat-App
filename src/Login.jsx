import { useState } from "react";
import Api from "./Api";
import { useAuthContext } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "./Contexts/AuthContext";

function Login() {

    const [loginData, setLoginData] = useState(
        {
            username: '',
            password: ''
        }
    )

    const { setIsAuthenticated, setUser } = useAuthContext();

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        )
        )
    }

    const handleSubmit = async () => {

        if (!loginData.username.trim() || !loginData.password.trim()) {
            window.alert('All the fields are required and they should not be blank spaces!');
            return;
        }

        if (loginData.password.length < 6) {
            window.alert('Password must have atleast 6 characters');
            return;
        }

        try {
            const response = await Api.post('/login', {
                username: loginData.username.trim(),
                password: loginData.password.trim()
            }, { _isLogin: true });
            const token = response.headers['authorization'];
            const decoded = decodeToken(token);
            if (!decoded) {
                window.alert('Token is malformed!');
                return;
            }
            setUser(
                { username: decoded.sub }
            );
            window.alert(response.data);
            setIsAuthenticated(true);
            localStorage.setItem("token", token);
            console.log(token);
            navigate('/', { replace: true });
        } catch (error) {
            window.alert(error.response?.data || "Login Failed");
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
                <input value={loginData.username} style={inputStyle} className={`input-text-area auth-input`} type="text" placeholder="Enter username" name="username" onChange={handleChange} />
                <input value={loginData.password} style={inputStyle} className={`input-text-area auth-input`} type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                <button className={`btn tran-eff`} onClick={handleSubmit}>
                    Login
                </button>
                <p>
                    Don't have an account yet?
                </p>
                <button className={`btn tran-eff`} onClick={() => navigate('/register', { replace: true })}>
                    Register
                </button>
            </div>
        </>
    )
}

export default Login;