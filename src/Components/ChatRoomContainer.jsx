import styles from '../Styles/ChatRoomContainer.module.css';
import ChatRoomTop from './ChatRoomTop';
import ChatRoomMiddle from './ChatRoomMiddle';
import ChatRoomBottom from './ChatRoomBottom';

function ChatRoomContainer({setActiveComponent}) {
    return (
        <section className={`chatRoomContainer ${styles.chatRoomContainer}`}>
            <ChatRoomTop setActiveComponent={setActiveComponent} />
            <ChatRoomMiddle />
            <ChatRoomBottom />
        </section>
    )
}

export default ChatRoomContainer;