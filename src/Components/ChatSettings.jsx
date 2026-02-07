import { CircleChevronLeft } from "lucide-react";
import {useAppContext} from '../Contexts/AppContext';

function ChatSettings() {

    const style = {
        height: '10%',
        width: '100%',
        alignItems: 'center'
    }

    const {setShowSettings} = useAppContext();

    return (
        <div style={{border:'2px solid white'}} className={`chat-settings flex-col animate-display`}>

            <div style={style} className={`flex-row`}>
                <CircleChevronLeft style={{ marginLeft: '1rem' }} className={`icon tran-eff`} onClick={() => setShowSettings(false)} />
            </div>

            <div className={`flex-col center-center`}>

            </div>

        </div>
    )
}

export default ChatSettings;