import { Send } from 'lucide-react';
import useStomp from '../CustomHooks/useStomp';
import { useAppContext } from '../Contexts/AppContext';

function ChatRoomBottom() {

    const roomId = 'room1';

    const {setMessages, drafts, setDrafts} = useAppContext();

    const draft = drafts[roomId] || '';

    const {connected, sendMessage} = useStomp(
        import.meta.env.VITE_WS_URL,
        [
            {
                destination:"/topic/messages",
                callback:(frame)=>{
                    const body = JSON.parse(frame.body);
                    setMessages((prev)=>[...prev, body])
                },
            },
        ]
    )

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
                    [roomId]:e.target.value
                }
            )
        )
    }

    const handleClick = async () => {
        if(connected){
            if(!draft.trim()){
                setDrafts(prev=>({...prev, [roomId]:''}));
                return;
            }
            sendMessage("/app/chat",{text:draft, roomId});
            setDrafts(prev=>({...prev, [roomId]:''}));
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