import ChatRoomsContainer from "./ChatRoomsContainer";
import ChatRoomContainer from "./ChatRoomContainer";
import Banner from "./Banner";
import { useAppContext } from "../Contexts/AppContext";

function DesktopView() {

    const {activeComponent, selectedChat} = useAppContext(); 

    const style1 = {
        width: '95%',
        height: '100%',
        border: '2px solid white'
    }
    
    const style2 = {
        width: '70%',
        height: '100%',
        border: '2px solid white'
    }

    if (activeComponent === 'ChatRooms' && selectedChat) {
        return (
            <>
                <ChatRoomsContainer/>
                <ChatRoomContainer/>
            </>
        )
    }

    if (activeComponent === 'ChatRooms' && !selectedChat) {
        return (
            <>
                <ChatRoomsContainer/>
                <Banner style={style2} />
            </>
        )
    }
    if (activeComponent === 'Banner') {
        return (
            <Banner style={style1} />
        )
    }
}

export default DesktopView;