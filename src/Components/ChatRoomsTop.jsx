
import { MessageCirclePlus } from 'lucide-react';

function ChatRoomsTop({setActiveComponent}) {

    const style={
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <div style={style} className={`flex-row`}>
            <h1 className={`margin-x`}>Chats</h1>
            <MessageCirclePlus className={`icon margin-x`} />
        </div>
    )
}

export default ChatRoomsTop;