import { useState } from "react";
import { useAppContext } from "./Contexts/AppContext";
import Api from "./Api";

function AuthPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMode, setLoginMode] = useState(true);

    const { setIsAuthenticated } = useAppContext();

    const url = loginMode ? "/login" : "/register";

    const handleSubmit = async () => {
        try {
            await Api.post(url, { username, password });
            setIsAuthenticated(true);
        } catch (error) {
            window.alert(error);
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
        width: '15vw',
        height: '5vh'
    }

    return (
        <>
            <div style={containerStyle} className={`flex-col bg-font-color center-center fullscreen-display`}>
                <h1>{loginMode ? "Login" : "Register"}</h1>
                <input style={inputStyle} className={`input-text-area`} type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                <input style={inputStyle} className={`input-text-area`} type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <button className={`btn tran-eff`} onClick={handleSubmit}>
                    {loginMode ? "Login" : "Register"}
                </button>
                <p>
                    {loginMode ? "Don't have an account?" : "Already have an account?"}
                </p>
                <button className={`btn tran-eff`} onClick={() => setLoginMode(!loginMode)}>
                    {loginMode ? "Register here" : "Login here"}
                </button>
            </div>
        </>
    )
}

export default AuthPage;