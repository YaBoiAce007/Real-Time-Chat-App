import styles from '../Styles/ChatRoomBottom.module.css';
import { Send } from 'lucide-react';

function ChatRoomBottom() {
    return (
        <section className={styles.chatRoomBottom}>
            <textarea className={styles.chatRoomBottomInput} placeholder='Type a message...'></textarea>
            <Send className={`icon ${styles.chatRoomBottomIcon}`} />
        </section>
    )
}

export default ChatRoomBottom;