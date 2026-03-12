import { useState } from "react";
import Api from "./Api";
import { useAuthContext } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "./Contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";

function Login() {

    const [showPassword, setShowPassword] = useState(false);

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

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

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
                <div className={`flex-row center-center auth-input`} style={inputStyle}>
                    <input
                        value={loginData.password}
                        style={{ width: '100%', height: '100%' }}
                        className={`input-text-area`}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        name="password"
                        onChange={handleChange}
                    />

                    <span
                        onClick={togglePasswordVisibility}
                        className={`flex-row center-center`}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        {showPassword ? <Eye className={`icon  tran-eff`} /> : <EyeOff className={`icon  tran-eff`} />}
                    </span>
                </div>
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