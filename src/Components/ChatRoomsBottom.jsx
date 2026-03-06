import { useEffect } from 'react';
import { useAppContext } from '../Contexts/AppContext';

function ChatRoomsBottom() {

    const { setSelectedChat, rooms } = useAppContext()

    

    const outerStyle = {
        height: '90%',
        width: '100%',
        //Reminder for my future self, use these styles below for each ChatCard :)
        /*whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis'
        */
        border: '2px solid white',
        padding: '10px',
        gap: '10px',
        overflowY: 'auto'
    };

    const innerStyle = {
        width: '100%',
        border: '2px solid white',
        borderRadius: '1rem',
        justifyContent: 'center',
        padding: '10px',
    }

    return (
        <div style={outerStyle} className={`flex-col`}>
            {rooms.map((room) => (
                <div
                    key={room.roomId}
                    style={innerStyle}
                    className={`flex-col tran-eff`}
                    onClick={() => setSelectedChat(room)}>
                    <p className={`nw-hide-ellip`}>{room.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatRoomsBottom;