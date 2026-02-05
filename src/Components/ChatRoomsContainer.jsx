
import ChatRoomsTop from './ChatRoomsTop';
import ChatRoomsBottom from './ChatRoomsBottom';

function ChatRoomsContainer(){

    return(
        <div className={`chat-rooms flex-col bg-font-color animate-display`}>
            <ChatRoomsTop />
            <ChatRoomsBottom />
        </div>
    )
}

export default ChatRoomsContainer;