import { EllipsisVertical } from 'lucide-react';
import {CircleChevronLeft} from 'lucide-react';
import {useAppContext} from '../Contexts/AppContext';

function ChatRoomTop({goBackTo}) {

    const {setActiveComponent, setSelectedChat, setShowSettings, selectedChat} = useAppContext();

    const style = {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <div style={style} className={`flex-row`}>
            <CircleChevronLeft className={`icon tran-eff`} onClick={()=>{setActiveComponent(goBackTo); setSelectedChat(null)}}/>
            <h2 className={`nw-hide-ellip`}>{selectedChat?.name}</h2>
            <EllipsisVertical className={`icon tran-eff `} onClick={()=>setShowSettings(true)}/>
        </div>
    )
}

export default ChatRoomTop;