import { CircleChevronLeft, Search } from "lucide-react";
import {useAppContext} from '../Contexts/AppContext'

function StartChat({goBackTo}) {

    const {setActiveComponent} = useAppContext();

    const style1 = {
        border: '2px solid white',
        width: '100%',
        minHeight: '10%'
    }
    
    const style2 = {
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid white',
        width: '100%',
        height: '10%'
    }

    const style3 = {
        border: '2px solid white',
        width: '100%',
        height: '80%'
    }

    return (
        <div className={`start-chat animate-display`}>
            <div style={style1} className="flex-row">
                No contacts selected
            </div>
            <div style={style2} className={`flex-row`}>
                <CircleChevronLeft style={{marginLeft:'1rem'}} className={`icon tran-eff`} onClick={()=>setActiveComponent(goBackTo)}/>
                <input className={`input-text-area`} type="text" placeholder="Enter username" />
                <Search style={{marginRight:'1rem'}} className={`icon tran-eff`} />
            </div>
            <div style={style3} className={`flex-col`}></div>
        </div>
    )
}

export default StartChat;