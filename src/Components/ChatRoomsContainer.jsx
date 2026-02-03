import styles from '../Styles/ChatRoomsContainer.module.css';
import ChatRoomsTop from './ChatRoomsTop';
import ChatRoomsBottom from './ChatRoomsBottom';

function ChatRoomsContainer(){
    return(
        <section className={`chatRoomsContainer ${styles.chatRoomsContainer}`}>
            <ChatRoomsTop />
            <ChatRoomsBottom />
        </section>
    )
}

export default ChatRoomsContainer;