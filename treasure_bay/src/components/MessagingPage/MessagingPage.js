<<<<<<< HEAD
=======
import React, { createContext, useEffect } from 'react'
import Conversations from '../Conversations/Conversations';
>>>>>>> 90f96a780410a033a1c8b96642fdf4b9c6575146
import Messages from '../Messages/Messages'
import axios from 'axios';
import { useConversations } from '../../context/ConversationsProvider';
import UserContext from '../../context/UserProvider';
import './MessagingPage.css'

function MessagingPage() {

<<<<<<< HEAD
    // const socket = io('http://localhost:3025')

    // socket.on('connect', () => {
    //     console.log(socket)
    // })

    return (
        <div className='messaging-container'>
            <div className='conversations'>
                {/* <Conversations /> */}
=======
    const { user } = createContext(UserContext)

    const { setMessages, setConversations } = useConversations()

    //will be replaced with user id
    const ID = user.user_id
    useEffect(() => {
        axios.all([
            axios.get(`http://localhost:3025/conversations/${ID}`),
            axios.get('http://localhost:3025/messages')
        ])
            .then((response) => {
                setConversations(response[0].data);
                setMessages(response[1].data);
            });
    }, [user])


    return (
        <div className='messaging-container'>
            <div className='conversations'>
                <Conversations />
>>>>>>> 90f96a780410a033a1c8b96642fdf4b9c6575146
            </div>
            <div className='messaging'>
                <Messages />
            </div>
        </div>
    )
}

export default Messages