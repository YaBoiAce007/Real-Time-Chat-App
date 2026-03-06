import { CircleChevronLeft } from "lucide-react";
import {useAppContext} from '../Contexts/AppContext'
import { useState } from "react";
import Api from "../Api";

function StartChat({goBackTo}) {

    const {setActiveComponent} = useAppContext();
    const [loading, setLoading] = useState(false);
    const [roomName, setRoomName] = useState('');
    
    const style1 = {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '10%'
    }

    const style2 = {
        width: '100%',
        height: '90%',
        gap: '1rem'
    }

    const inputStyle = {
        border: '2px solid white',
        borderRadius: '1rem',
    }

    const handleClick = async()=>{
        if(!roomName.trim()){
            setRoomName('');
            return;
        }
        setLoading(true);
        try{
            const response = await Api.post('/rooms',{name: roomName.trim()});
            window.alert(response.data);
            setActiveComponent(goBackTo);
        }
        catch(error){
            if(error.response?.status===409){
                window.alert(error.response.data);
            }
            else{
                window.alert('Something went wrong');
            }
        }
        finally{
            setRoomName('');
            setLoading(false);
        }
    }

    return (
        <div style={{border:'2px solid white'}} className={`start-chat animate-display`}>
            <div style={style1} className={`flex-row`}>
                <CircleChevronLeft style={{ marginLeft: '1rem' }} className={`icon tran-eff`} onClick={()=>setActiveComponent(goBackTo)}/>
            </div>
            <div style={style2} className={`flex-col center-center`}>
                <input style={inputStyle} className={`input-text-area auth-input`} type="text" placeholder="Enter room name" value={roomName} onChange={(e)=>setRoomName(e.target.value)}/>
                <button className={`btn tran-eff`} onClick={handleClick} disabled={loading}>{loading?'Creating...':'Create'}</button>
            </div>
        </div>
    )
}

export default StartChat;