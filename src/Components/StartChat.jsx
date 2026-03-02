import { CircleChevronLeft } from "lucide-react";
import {useAppContext} from '../Contexts/AppContext'

function StartChat({goBackTo}) {

    const {setActiveComponent} = useAppContext();
    
    const style1 = {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '10%'
    }

    const style2 = {
        width: '100%',
        height: '90%'
    }

    return (
        <div style={{border:'2px solid white'}} className={`start-chat animate-display`}>
            <div style={style1} className={`flex-row`}>
                <CircleChevronLeft style={{ marginLeft: '1rem' }} className={`icon tran-eff`} onClick={()=>setActiveComponent(goBackTo)}/>
            </div>
            <div style={style2} className={`flex-col`}></div>
        </div>
    )
}

export default StartChat;