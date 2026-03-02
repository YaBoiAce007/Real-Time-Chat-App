import { MessageCircleMore } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { useAppContext } from '../Contexts/AppContext';

function Navbar() {

    const {setActiveComponent, setSelectedChat, setShowSettings} = useAppContext();

    const style = {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <nav style={style} className={`navbar flex-col`}>
            <MessageCircleMore className={`icon  tran-eff`} onClick={() => setActiveComponent('ChatRooms')} />
            <UserRound className={`icon  tran-eff`} onClick={() => {setActiveComponent('Profile'); setSelectedChat(null);setShowSettings(false);}}/>
        </nav>
    )
}
export default Navbar;