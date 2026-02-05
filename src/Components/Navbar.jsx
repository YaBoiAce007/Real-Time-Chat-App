import { MessageCircleMore } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { UsersRound } from 'lucide-react';

function Navbar({setActiveComponent}) {

    const style = {
        width: '5%',
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