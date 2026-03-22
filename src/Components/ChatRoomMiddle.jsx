import { useCallback, useEffect, useRef } from "react";
import { useAppContext } from "../Contexts/AppContext";
import { useAuthContext } from "../Contexts/AuthContext";
import Api from "../Api";

function ChatRoomMiddle() {

    const { messages, selectedChat, setMessages } = useAppContext();
    const { user } = useAuthContext();
    const containerRef = useRef(null);

    const roomMessages = messages[selectedChat.roomId] || [];

    useEffect(() => {
        if (!selectedChat?.roomId) return;

        const fetchInitialMessages = async () => {
            const response = await Api.get(`/rooms/${selectedChat.roomId}/messages`);
            const initialMessages = response.data;

            setMessages((prev) => ({
                ...prev,
                [selectedChat.roomId]: initialMessages
            }));

            // scroll to bottom after messages load
            requestAnimationFrame(() => {
                if (containerRef.current) {
                    containerRef.current.scrollTop = containerRef.current.scrollHeight;
                }
            });
        }

        fetchInitialMessages();
    }, [selectedChat.roomId]);

    const fetchOlderMessages = useCallback(async () => {
        const oldest = roomMessages[0];
        if (!oldest) return;

        const prevScrollHeight = containerRef.current.scrollHeight;
        const response = await Api.get(`/rooms/${selectedChat.roomId}/messages?before=${oldest.timestamp}`);
        const olderMessages = response.data;

        if (olderMessages.length === 0) return;

        setMessages((prev) => ({
            ...prev,
            [selectedChat.roomId]: [...olderMessages, ...prev[selectedChat.roomId]]
        }));

        requestAnimationFrame(
            () => {
                const newScrollHeight = containerRef.current.scrollHeight;
                containerRef.current.scrollTop = newScrollHeight - prevScrollHeight;
            }
        );
    }, [selectedChat.roomId, roomMessages]);

    const handleScroll = () => {
        if (containerRef.current.scrollTop === 0) {
            fetchOlderMessages();
        }
    }

    const style = {
        height: '80%',
        width: '100%',
        border: '2px solid white',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px',
    };

    const iconStyle = {
        backgroundColor: 'white',
        color: 'black',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        flexShrink: 0
    };

    const bubbleStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: '8px 12px',
        borderRadius: '12px',
        maxWidth: '60%',
        wordBreak: 'break-word'
    };

    const timestampStyle = {
        fontSize: '10px',
        color: '#555',
        display: 'block',
        textAlign: 'right',
        marginTop: '4px'
    };

    return (
        <div ref={containerRef} onScroll={handleScroll} style={style}>
            {roomMessages.map((m) => {
                const isOwn = m.sender === user?.username;
                return (
                    <div
                        key={m.messageId}
                        style={{
                            display: 'flex',
                            flexDirection: isOwn ? 'row-reverse' : 'row',
                            alignItems: 'flex-end',
                            gap: '8px'
                        }}
                    >
                        <div style={iconStyle}>
                            {m.sender?.charAt(0).toUpperCase()}
                        </div>
                        <div style={bubbleStyle}>
                            <span style={{ display: 'block' }}>{m.text}</span>
                            <span style={timestampStyle}>
                                {new Date(m.timestamp).toLocaleTimeString()}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ChatRoomMiddle;