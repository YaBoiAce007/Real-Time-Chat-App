import styles from '../Styles/ChatRoomContainer.module.css';
import ChatRoomTop from './ChatRoomTop';
import ChatRoomMiddle from './ChatRoomMiddle';
import ChatRoomBottom from './ChatRoomBottom';

function ChatRoomContainer() {
    return (
        <section className={`chatRoomContainer ${styles.chatRoomContainer}`}>
            <ChatRoomTop />
            <ChatRoomMiddle />
            <ChatRoomBottom />
        </section>
    )
}

export default ChatRoomContainer;