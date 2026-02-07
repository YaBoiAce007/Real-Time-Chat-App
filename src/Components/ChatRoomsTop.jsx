
import { MessageCirclePlus } from 'lucide-react';
import {useAppContext} from '../Contexts/AppContext'

function ChatRoomsTop() {

    const {setActiveComponent, setSelectedChat, setShowSettings} = useAppContext();

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
            <MessageCirclePlus onClick={()=>{setActiveComponent('StartChat');setSelectedChat(null);setShowSettings(false);}} className={`icon tran-eff margin-x`} />
        </div>
    )
}

export default ChatRoomsTop;