import ChatRoomTop from './ChatRoomTop';
import ChatRoomMiddle from './ChatRoomMiddle';
import ChatRoomBottom from './ChatRoomBottom';

function ChatRoomContainer({setActiveComponent}) {
    return (
        <div className={`chat-room flex-col bg-font-color animate-display`}>
            <ChatRoomTop setActiveComponent={setActiveComponent} />
            <ChatRoomMiddle />
            <ChatRoomBottom />
        </div>
    )
}

export default ChatRoomContainer;