import { Send } from 'lucide-react';
import Api from '../Api';

function ChatRoomBottom() {

    const style = {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid white'
    }

    const handleClick = async () => {
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