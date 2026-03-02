import { useAppContext } from "../Contexts/AppContext";

function ChatRoomMiddle(){

    const {messages} = useAppContext();

    const style = {
        height: '80%',
        width: '100%',
        border: '2px solid white'
    }

    return(
        <div style={style} className={`flex-col`}>
            <ul>
                {messages.map((m,i)=><li key={i}>{m.text}</li>)}
            </ul>
        </div>
    )
}

export default ChatRoomMiddle;