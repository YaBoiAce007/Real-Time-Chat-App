import { useState } from "react";
import Api from "./Api";
import { useAuthContext } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

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
                <input style={inputStyle} className={`input-text-area auth-input`} type="text" placeholder="Enter username" name="username" />
                <input style={inputStyle} className={`input-text-area auth-input`} type="password" placeholder="Enter password"  name="password" />
                <button className={`btn tran-eff`}>
                    Login
                </button>
                <p>
                    Don't have an account yet?
                </p>
                <button className={`btn tran-eff`} onClick={()=>navigate('/register')}>
                    Register
                </button>
            </div>
        </>
    )
}

export default Login;