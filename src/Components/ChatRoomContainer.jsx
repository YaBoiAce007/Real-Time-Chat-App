import ChatRoomTop from './ChatRoomTop';
import ChatRoomMiddle from './ChatRoomMiddle';
import ChatRoomBottom from './ChatRoomBottom';
import { useAppContext } from '../Contexts/AppContext';
import ChatSettings from './ChatSettings';

function ChatRoomContainer({ goBackTo }) {

    const {showSettings} = useAppContext();

    return (
        <>
            {
                showSettings ? (
                    <ChatSettings />
                )
                    :
                    <div className={`chat-room flex-col animate-display`} >
                        <ChatRoomTop goBackTo={goBackTo} />
                        <ChatRoomMiddle />
                        <ChatRoomBottom />
                    </div >
            }
        </>
    )

}

export default ChatRoomContainer;