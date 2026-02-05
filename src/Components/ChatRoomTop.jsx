import { EllipsisVertical } from 'lucide-react';
import {CircleChevronLeft} from 'lucide-react';
import {useAppContext} from '../Contexts/AppContext';

function ChatRoomTop({goBackTo}) {

    const {setActiveComponent, setSelectedChat} = useAppContext();

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
            <h2 className={`nw-hide-ellip`}>Chat Room Name</h2>
            <EllipsisVertical className={`icon tran-eff `} />
        </div>
    )
}

export default ChatRoomTop;