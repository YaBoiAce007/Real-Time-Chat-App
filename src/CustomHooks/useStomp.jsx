import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

function useStomp(url, subscriptions = []) {
    const clientRef = useRef(null);
    const [connected, setConnected] = useState(false);

    useEffect(
        () => {
            const client = new Client(
                {
                    webSocketFactory: () => new SockJS(url),
                    connectHeaders: {authorization: localStorage.getItem('token')},
                    reconnectDelay: 5000,
                    onConnect: ()=>{
                        setConnected(true);
                        subscriptions.forEach(
                            ({destination, callback})=>client.subscribe(destination, callback)
                        )
                    },
                    onDisconnect: ()=>setConnected(false),
                    onStompError: (frame)=>console.log("STOMP Error: ",frame)
                }
            );
            client.activate();
            clientRef.current=client;

            return ()=>client.deactivate();
        },[url]
    );

    function sendMessage(destination, body){
        if(clientRef.current?.connected){
            clientRef.current.publish(
                {
                    destination,
                    body: JSON.stringify(body)
                }
            )
        }
    }
    
    return {connected, sendMessage};
}

export default useStomp;