
import { MessageCircleMore } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import styles from '../Styles/Navbar.module.css';

function Navbar() {
    return (

        <nav className={styles.navbar}>
            <MessageCircleMore className={`icon ${styles.navIcon}`} />
            <UserRoundPlus className={`icon ${styles.navIcon}`} />
            <UsersRound className={`icon ${styles.navIcon}`} />
            <UserRound className={`icon ${styles.navIcon}`} />
        </nav>

    )
}
export default Navbar;