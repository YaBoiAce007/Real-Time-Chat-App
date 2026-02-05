import ChatRoomTop from './ChatRoomTop';
import ChatRoomMiddle from './ChatRoomMiddle';
import ChatRoomBottom from './ChatRoomBottom';

function ChatRoomContainer({goBackTo}) {
    return (
        <div className={`chat-room flex-col animate-display`}>
            <ChatRoomTop goBackTo={goBackTo}/>
            <ChatRoomMiddle />
            <ChatRoomBottom />
        </div>
    )
}

export default ChatRoomContainer;