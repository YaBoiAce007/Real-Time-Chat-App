import ChatRoomsContainer from "./ChatRoomsContainer";
import ChatRoomContainer from "./ChatRoomContainer";
import Banner from "./Banner";
import { useAppContext } from "../Contexts/AppContext";
import AddFriend from "./AddFriend";
import Friends from "./Friends";
import Profile from "./Profile";
import StartChat from "./StartChat";

function MobileView() {

    const {activeComponent, selectedChat} = useAppContext(); 

    const style = {
        width: '80%',
        height: '100%',
        border: '2px solid white'
    }

    if(selectedChat){
        return(
            <ChatRoomContainer goBackTo={'ChatRooms'}/>
        )
    }

    switch (activeComponent) {
        case 'Banner':
            return <Banner style={style} />;
        case 'ChatRooms':
            return <ChatRoomsContainer/>;
        case 'AddFriend':
            return <AddFriend/>;
        case 'Friends':
            return <Friends />;
        case 'Profile':
            return <Profile />;
        case 'StartChat':
            return <StartChat goBackTo={'ChatRooms'}/>;
    }
}

export default MobileView;