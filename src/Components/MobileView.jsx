import ChatRoomsContainer from "./ChatRoomsContainer";
import ChatRoomContainer from "./ChatRoomContainer";
import Banner from "./Banner";

function MobileView({ activeComponent, setActiveComponent, selectedChat, setSelectedChat }) {

    const style = {
        width: '80%',
        height: '100%',
        border: '2px solid white'
    }

    switch (activeComponent) {
        case 'Banner':
            return <Banner style={style} />;
        case 'ChatRooms':
            return (
                <ChatRoomsContainer
                    setActiveComponent={setActiveComponent}
                    setSelectedChat={setSelectedChat}
                />
            )
        case 'Chat':
            return (
                <ChatRoomContainer
                    setActiveComponent={setActiveComponent}
                />
            )
    }
}

export default MobileView;