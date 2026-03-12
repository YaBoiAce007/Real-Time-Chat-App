import { useState } from "react";
import Api from "./Api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Register() {

    const [registrationData, setRegistrationData] = useState(
        {
            username: '',
            password: ''
        }
    )
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setRegistrationData(
            prev => (
                {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            )
        )
    }

    const handleSubmit = async () => {

        if (!registrationData.username.trim() || !registrationData.password.trim()) {
            window.alert('All the fields are required and they should not be blank spaces!');
            return;
        }

        if (registrationData.password.length < 6) {
            window.alert('Password must have atleast 6 characters');
            return;
        }

        try {
            const response = await Api.post('/register', {
                username: registrationData.username.trim(),
                password: registrationData.password.trim()
            });
            window.alert(response.data);
            navigate('/login', { replace: true });
        } catch (error) {
            window.alert(error.response?.data || "Registration Failed");
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
                <h1>Register</h1>
                <input value={registrationData.username} style={inputStyle} className={`input-text-area auth-input`} type="text" placeholder="Enter username" name="username" onChange={handleChange} />
                <div className={`flex-row center-center auth-input`} style={inputStyle}>
                    <input
                        value={registrationData.password}
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
                    Register
                </button>
                <p>
                    Already have an account?
                </p>
                <button className={`btn tran-eff`} onClick={() => navigate('/login', { replace: true })}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Register;