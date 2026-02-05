
import ChatRoomsTop from './ChatRoomsTop';
import ChatRoomsBottom from './ChatRoomsBottom';

function ChatRoomsContainer({setActiveComponent, setSelectedChat}){

    return(
        <div className={`chat-rooms flex-col bg-font-color animate-display`}>
            <ChatRoomsTop setActiveComponent={setActiveComponent} />
            <ChatRoomsBottom setSelectedChat={setSelectedChat} />
        </div>
    )
}

export default ChatRoomsContainer;