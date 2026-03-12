import Navbar from "./Navbar";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import { useAppContext } from "../Contexts/AppContext";
import useStomp from "../CustomHooks/useStomp";
import { useEffect } from "react";
import Api from "../Api";

function AppContent() {

    const { isMobile, setRooms, setSendMessage, setConnected, setSubscribe, selectedChat, setMessages} = useAppContext();

    const {connected, subscribe, sendMessage} = useStomp(
        import.meta.env.VITE_WS_URL,
        [
            {
                destination: "/topic/rooms",
                callback: (frame) => {
                    const body = JSON.parse(frame.body);
                    setRooms((prev) => [...prev, body])
                },
            }
        ]
    )

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await Api.get('/rooms');
                setRooms(response.data);
            }
            catch (error) {
                console.error('An error occurred while fetching the rooms');
            }
        };
        fetchRooms();
    }, []);

    useEffect(()=>{
        setConnected(connected);
        setSendMessage(()=>sendMessage);
        setSubscribe(()=>subscribe);
    },[connected, subscribe, sendMessage]);

    useEffect(()=>{
        if(!selectedChat || !connected){
            return;
        }
        const unsubscribe = subscribe(
            `/topic/${selectedChat.roomId}`,
            (frame)=>{
                const body = JSON.parse(frame.body);
                setMessages((prev)=>({
                    ...prev,
                    [selectedChat.roomId]: [...(prev[selectedChat.roomId] || []), body]
                }));
            }
        );

        return ()=>{
            if(unsubscribe){
                unsubscribe();
            }
        }
    },[selectedChat?.roomId, connected]);

    return (
        <section className={`flex-row fullscreen-display bg-font-color`}>
            <Navbar />
            {
                isMobile ? (<MobileView />) : (<DesktopView />)
            }
        </section>
    )
}

export default AppContent;