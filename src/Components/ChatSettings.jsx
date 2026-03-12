import { CircleChevronLeft } from "lucide-react";
import { useAppContext } from '../Contexts/AppContext';

function ChatSettings() {

    const { setShowSettings, selectedChat } = useAppContext();

    const style1 = {
        height: '10%',
        width: '100%',
        alignItems: 'center'
    }

    const style2 = {
        height: '90%',
        width: '100%',
        gap: '1rem'
    }

    const formattedDateTime = new Date(selectedChat.createdAt)
        .toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })
        .replace(',', '');

    return (
        <div style={{ border: '2px solid white' }} className={`chat-settings flex-col animate-display`}>

            <div style={style1} className={`flex-row`}>
                <CircleChevronLeft style={{ marginLeft: '1rem' }} className={`icon tran-eff`} onClick={() => setShowSettings(false)} />
            </div>

            <div style={style2} className={`flex-col center-center`}>
                <h2>Room Name: {selectedChat.name}</h2>
                <h2>Created By: {selectedChat.createdBy}</h2>
                <h2>Creation Date: {formattedDateTime}</h2>
            </div>

        </div>
    )
}

export default ChatSettings;