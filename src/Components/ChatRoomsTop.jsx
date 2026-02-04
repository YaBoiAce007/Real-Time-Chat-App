import styles from '../Styles/ChatRoomsTop.module.css';
import { MessageCirclePlus } from 'lucide-react';

function ChatRoomsTop({setActiveComponent}) {
    return (
        <section className={styles.chatRoomsTop}>
            <h1 className={styles.chatRoomsTopTitle}>Chats</h1>
            <MessageCirclePlus className={`icon ${styles.chatRoomsTopIcon}`} />
        </section>
    )
}

export default ChatRoomsTop;