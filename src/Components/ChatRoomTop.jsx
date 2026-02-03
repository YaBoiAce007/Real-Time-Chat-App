import {EllipsisVertical} from 'lucide-react';
import styles from '../Styles/ChatRoomTop.module.css';

function ChatRoomTop() {
    return (
        <section className={styles.chatRoomTop}>
            <h2 className={styles.chatRoomTopName}>Chat Room Name</h2>
            <EllipsisVertical className={`icon ${styles.chatRoomTopIcon}`} />
        </section>
    )
}

export default ChatRoomTop;