import { useAuthContext } from "../Contexts/AuthContext";
import { useAppContext } from "../Contexts/AppContext";

function Profile() {

    const { setActiveComponent } = useAppContext();
    const { setIsAuthenticated, user } = useAuthContext();

    const style1 = {
        border: '2px solid white',
        gap: '1rem'
    }

    const style2 = {
        backgroundColor: 'white',
        color: 'black',
        width: '120%',
        height: '120%',
        borderRadius: '50%',
        fontSize: '6rem',
        flexShrink: 0
    }

    const handleClick = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setActiveComponent('Banner');
        window.alert("You have been logged out.");
    }

    return (
        <div style={style1} className={`profile flex-col animate-display center-center`}>
            <div style={style2} className={`flex-row center-center`}>{user?.username?.[0].toUpperCase()}</div>
            <h2>Username: {user?.username}</h2>
            <button className={`btn tran-eff`} onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Profile;