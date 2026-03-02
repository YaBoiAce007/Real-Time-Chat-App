import { Send } from 'lucide-react';
import Api from '../Api';
import useStomp from '../CustomHooks/useStomp';
import { useAppContext } from '../Contexts/AppContext';

function ChatRoomBottom() {

    const {setMessages} = useAppContext();

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

    const handleClick = async () => {
        if(connected){
            sendMessage("/app/chat",{text:'Hello!'});
        }
        else{
            window.alert("Websocket not connected");
        }
        try {
            const response = await Api.get('/Greet');
            console.log(response.data);
        }
        catch(error){
            console.log(error.response);
        }
    }

    return (
        <div style={style} className={`flex-row `}>
            <textarea className={`input-text-area margin-x`} placeholder='Type a message...'></textarea>
            <Send className={`icon tran-eff margin-x`} onClick={handleClick} />
        </div>
    )
}

export default ChatRoomBottom;