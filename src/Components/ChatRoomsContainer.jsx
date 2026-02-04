import styles from '../Styles/ChatRoomsContainer.module.css';
import ChatRoomsTop from './ChatRoomsTop';
import ChatRoomsBottom from './ChatRoomsBottom';

function ChatRoomsContainer({setActiveComponent, setSelectedChat}){
    return(
        <section className={`chatRoomsContainer ${styles.chatRoomsContainer}`}>
            <ChatRoomsTop setActiveComponent={setActiveComponent} />
            <ChatRoomsBottom setSelectedChat={setSelectedChat} />
        </section>
    )
}

export default ChatRoomsContainer;