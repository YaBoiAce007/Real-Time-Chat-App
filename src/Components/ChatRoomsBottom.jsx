import { useAppContext } from '../Contexts/AppContext';

function ChatRoomsBottom() {

    const { setSelectedChat } = useAppContext()

    const outerStyle = {
        height: '90%',
        width: '100%',
        //Reminder for my future self, use these styles below for each ChatCard :)
        /*whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis'
        */
        border: '2px solid white'
    };

    const innerStyle = {
        marginTop: '.5rem',
        height: '10%',
        width: '100%',
        border: '2px solid white',
        justifyContent: 'center'
    }

    return (
        <div style={outerStyle} className={`flex-col`}>
            <div style={innerStyle} className={`flex-col tran-eff`} onClick={() => setSelectedChat(1)}>
                <p className={`nw-hide-ellip`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minima minus a alias impedit! Iusto quod pariatur error dignissimos doloremque quas distinctio, fugit eos officia porro nobis, ipsam minima velit ad cumque perferendis eligendi, ipsa dolorem modi aperiam. Deleniti distinctio nulla voluptas!</p>
                <p className={`nw-hide-ellip`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cumque, eum facilis numquam eveniet itaque temporibus, perferendis quod ipsam, hic autem unde dignissimos error atque sed obcaecati voluptate ipsa? Voluptatum ipsum magnam ipsa eveniet repellat voluptatibus minima illo repudiandae dolorem, aut a similique.</p>
            </div>
        </div>
    )
}

export default ChatRoomsBottom;