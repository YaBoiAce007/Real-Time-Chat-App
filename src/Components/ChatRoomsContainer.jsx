import styles from '../Styles/ChatRoomsContainer.module.css';
import ChatRoomsTop from './ChatRoomsTop';
import ChatRoomsBottom from './ChatRoomsBottom';

function chatRoomsContainer(){
    return(
        <section className={styles.chatRoomsContainer}>
            <ChatRoomsTop />
            <ChatRoomsBottom />
        </section>
    )
}

export default chatRoomsContainer;