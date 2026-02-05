import ChatRoomTop from './ChatRoomTop';
import ChatRoomMiddle from './ChatRoomMiddle';
import ChatRoomBottom from './ChatRoomBottom';

function ChatRoomContainer() {
    return (
        <div className={`chat-room flex-col animate-display`}>
            <ChatRoomTop />
            <ChatRoomMiddle />
            <ChatRoomBottom />
        </div>
    )
}

export default ChatRoomContainer;