import { MessageCircleMore } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { useAppContext } from '../Contexts/AppContext';

function Navbar() {

    const {setActiveComponent} = useAppContext();

    const style = {
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <nav style={style} className={`navbar flex-col`}>
            <MessageCircleMore className={`icon `} onClick={() => setActiveComponent('ChatRooms')} />
            <UserRoundPlus className={`icon `} onClick={() => setActiveComponent('AddFriend')}/>
            <UsersRound className={`icon `} onClick={() => setActiveComponent('Friends')}/>
            <UserRound className={`icon `} onClick={() => setActiveComponent('Profile')}/>
        </nav>
    )
}
export default Navbar;