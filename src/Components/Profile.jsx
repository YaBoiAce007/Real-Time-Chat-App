import {useAuthContext} from "../Contexts/AuthContext";
import { useAppContext } from "../Contexts/AppContext";

function Profile() {

    const {setActiveComponent} = useAppContext();
    const {setIsAuthenticated} = useAuthContext();

    const style = {
        border: '2px solid white'
    }

    const handleClick = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setActiveComponent('Banner');
        window.alert("You have been logged out.");
    }

    return (
        <div style={style} className={`profile flex-col animate-display center-center`}>
            <button className={`btn tran-eff`} onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Profile;