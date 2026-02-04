
import { MessageCircleMore } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import styles from '../Styles/Navbar.module.css';

function Navbar({setActiveComponent}) {
    return (

        <nav className={`navbar ${styles.navbar}`}>
            <MessageCircleMore className={`icon ${styles.navIcon}`} onClick={() => setActiveComponent('ChatRooms')} />
            <UserRoundPlus className={`icon ${styles.navIcon}`} onClick={() => setActiveComponent('AddFriend')}/>
            <UsersRound className={`icon ${styles.navIcon}`} onClick={() => setActiveComponent('Friends')}/>
            <UserRound className={`icon ${styles.navIcon}`} onClick={() => setActiveComponent('Profile')}/>
        </nav>

    )
}
export default Navbar;