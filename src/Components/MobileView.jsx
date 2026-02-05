import ChatRoomsContainer from "./ChatRoomsContainer";
import ChatRoomContainer from "./ChatRoomContainer";
import Banner from "./Banner";
import { useAppContext } from "../Contexts/AppContext";

function MobileView() {

    const {activeComponent, selectedChat} = useAppContext(); 

    const style = {
        width: '80%',
        height: '100%',
        border: '2px solid white'
    }

    if(selectedChat){
        return(
            <ChatRoomContainer />
        )
    }

    switch (activeComponent) {
        case 'Banner':
            return <Banner style={style} />;
        case 'ChatRooms':
            return (
                <ChatRoomsContainer/>
            )
        case 'Chat':
            return (
                <ChatRoomContainer/>
            )
    }
}

export default MobileView;