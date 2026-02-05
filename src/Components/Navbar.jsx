import { MessageCircleMore } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { useAppContext } from '../Contexts/AppContext';

function Navbar() {

    const {setActiveComponent, setSelectedChat} = useAppContext();

    const style = {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <nav style={style} className={`navbar flex-col`}>
            <MessageCircleMore className={`icon  tran-eff`} onClick={() => setActiveComponent('ChatRooms')} />
            <UserRoundPlus className={`icon  tran-eff`} onClick={() => {setActiveComponent('AddFriend'); setSelectedChat(null);}}/>
            <UsersRound className={`icon  tran-eff`} onClick={() => {setActiveComponent('Friends'); setSelectedChat(null);}}/>
            <UserRound className={`icon  tran-eff`} onClick={() => {setActiveComponent('Profile'); setSelectedChat(null);}}/>
        </nav>
    )
}
export default Navbar;