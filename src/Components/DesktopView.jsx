import ChatRoomsContainer from "./ChatRoomsContainer";
import Banner from "./Banner";

function DesktopView({ activeComponent, setActiveComponent, selectedChat, setSelectedChat }) {

    const style1 = {
        width: '70vw',
        height: '100vh'
    }

    const style2 = {
        width: '95vw',
        height: '100vh'
    }

    if (activeComponent === 'ChatRooms' && selectedChat) {
        return (<></>)
    }

    if (activeComponent === 'ChatRooms' && !selectedChat) {
        return (
                    <>
                        <ChatRoomsContainer
                            setActiveComponent={setActiveComponent}
                            setSelectedChat={setSelectedChat}
                        />
                        <Banner style={style1}/>
                    </>
                )
    }
    if(activeComponent === 'Banner') {
        return (
                    <Banner style={style2}/>
                )
    }
}

export default DesktopView;