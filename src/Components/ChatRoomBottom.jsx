import { Send } from 'lucide-react';
import { useAppContext } from '../Contexts/AppContext';

function ChatRoomBottom() {

    const {drafts, setDrafts, sendMessage, connected, selectedChat} = useAppContext();

    const draft = drafts[selectedChat?.roomId] || '';

    const style = {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid white'
    }

    const handleChange = (e)=>{
        setDrafts(
            (prev)=>(
                {
                    ...prev,
                    [selectedChat?.roomId]:e.target.value
                }
            )
        )
    }

    const handleClick = async () => {
        if(connected){
            if(!draft.trim()){
                setDrafts(prev=>({...prev, [selectedChat?.roomId]:''}));
                return;
            }
            sendMessage("/message/group",{text:draft, roomId: selectedChat?.roomId});
            setDrafts(prev=>({...prev, [selectedChat?.roomId]:''}));
        }
    }

    return (
        <div style={style} className={`flex-row `}>
            <textarea value={draft} className={`input-text-area margin-x`} placeholder='Type a message...' onChange={handleChange}></textarea>
            <Send style={{opacity:connected?1:.25,pointerEvents: connected ? 'auto' : 'none'}}className={`icon tran-eff margin-x`} onClick={handleClick} />
        </div>
    )
}

export default ChatRoomBottom;