import Messages from '../Messages/Messages'
// import { io } from 'socket.io-client'
import './MessagingPage.css'

function MessagingPage() {

    // const socket = io('http://localhost:3025')

    // socket.on('connect', () => {
    //     console.log(socket)
    // })

    return (
        <div className='messaging-container'>
            <div className='conversations'>
                {/* <Conversations /> */}
            </div>
            <div className='messaging'>
                <Messages />
            </div>
        </div>
    )
}

export default Messages