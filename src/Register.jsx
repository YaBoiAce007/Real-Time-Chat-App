import { useState } from "react";
import Api from "./Api";
import { useAuthContext } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {

    const [registrationData, setRegistrationData] = useState(
        {
            username: '',
            password: ''
        }
    )

    const navigate = useNavigate();

    const handleChange = (e) => {
        setRegistrationData(
            prev=>(
                {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            )
        )
    }

    const handleSubmit = async () => {

        if(!registrationData.username || !registrationData.password){
            window.alert('All the fields are required!');
            return;
        }

        if(registrationData.password.length<6){
            window.alert('Password must have atleast 6 characters');
            return;
        }

        try {
            const response = await Api.post('/register', registrationData);
            window.alert(response.data);
            navigate('/login', { replace: true });
        } catch (error) {
            window.alert(error.response?.data || "Registration Failed");
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
                <h1>Register</h1>
                <input value={registrationData.username} style={inputStyle} className={`input-text-area auth-input`} type="text" placeholder="Enter username" name="username" onChange={handleChange} />
                <input value={registrationData.password} style={inputStyle} className={`input-text-area auth-input`} type="password" placeholder="Enter password"  name="password" onChange={handleChange} />
                <button className={`btn tran-eff`} onClick={handleSubmit}>
                    Register
                </button>
                <p>
                    Already have an account?
                </p>
                <button className={`btn tran-eff`} onClick={()=>navigate('/login', { replace: true })}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Register;