import { Send } from 'lucide-react';

function ChatRoomBottom() {

    const style = {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <div style={style} className={`flex-row `}>
            <textarea className={`input-text-area margin-x bg-font-color`} placeholder='Type a message...'></textarea>
            <Send className={`icon tran-eff margin-x`} />
        </div>
    )
}

export default ChatRoomBottom;