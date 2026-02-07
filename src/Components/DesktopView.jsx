import ChatRoomsContainer from "./ChatRoomsContainer";
import ChatRoomContainer from "./ChatRoomContainer";
import Banner from "./Banner";
import AddFriend from "./AddFriend";
import { useAppContext } from "../Contexts/AppContext";
import Friends from "./Friends";
import Profile from "./Profile";

function DesktopView() {

    const { activeComponent, selectedChat } = useAppContext();

    const style1 = {
        width: '95%',
        height: '100%',
        border: '2px solid white'
    }

    const style2 = {
        width: '50%',
        height: '100%',
        border: '2px solid white'
    }

    if (activeComponent === 'ChatRooms' && selectedChat) {
        return (
            <>
                <ChatRoomsContainer />
                <ChatRoomContainer goBackTo={'ChatRooms'} />
            </>
        )
    }

    if (activeComponent === 'ChatRooms' && !selectedChat) {
        return (
            <>
                <ChatRoomsContainer />
                <Banner style={style2} />
            </>
        )
    }

    switch (activeComponent) {
        case 'Banner':
            return <Banner style={style1} />;

        case 'AddFriend':
            return (
                <>
                    <AddFriend />
                    <Banner style={style2} />
                </>
            );

        case 'Friends':
            return (
                <>
                    <Friends />
                    <Banner style={style2} />
                </>
            );

        case 'Profile':
            return (
                <>
                    <Profile />
                    <Banner style={style2} />
                </>
            );
    }
}

export default DesktopView;