import { Search } from 'lucide-react';

function AddFriend() {

    const style1 = {
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid white',
        width: '100%',
        height: '10%'
    }

    const style2 = {
        border: '2px solid white',
        width: '100%',
        height: '90%'
    }

    return (
        <div className={`add-friend animate-display`}>
            <div style={style1} className={`flex-row`}>
                <input className={`input-text-area margin-x`} type="text" placeholder="Enter username" />
                <Search className={`icon tran-eff margin-x`} />
            </div>
            <div style={style2} className={`flex-col`}></div>
        </div>
    )
}

export default AddFriend;