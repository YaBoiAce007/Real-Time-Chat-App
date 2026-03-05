import { useAppContext } from "../Contexts/AppContext";

function ChatRoomMiddle() {

    const { messages } = useAppContext();

    const style = {
        height: '80%',
        width: '100%',
        border: '2px solid white'
    }

    

    return (
        <div style={style} className={`flex-col`}>
            {/* <ul>
                {messages.map((m)=><li key={m.messageId}>{`${m.sender}\n${m.text}\n${m.timestamp}\n${m.roomId}\n${m.messageId}`}</li>)}
            </ul> */}
            {messages.map((m) => (
                <div key={m.messageId}>
                    <span>{m.sender}</span><br />
                    <span>{m.text}</span><br />
                    <span>{new Date(m.timestamp).toLocaleTimeString()}</span><br /><br /><br />
                </div>
            ))}
        </div>
    )
}

export default ChatRoomMiddle;