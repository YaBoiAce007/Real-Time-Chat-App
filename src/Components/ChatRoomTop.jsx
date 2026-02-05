import { EllipsisVertical } from 'lucide-react';


function ChatRoomTop() {

    const style = {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid white'
    }

    return (
        <div style={style} className={`flex-row`}>
            <h2 className={`margin-x nw-hide-ellip`}>Chat Room Name</h2>
            <EllipsisVertical className={`icon margin-x`} />
        </div>
    )
}

export default ChatRoomTop;