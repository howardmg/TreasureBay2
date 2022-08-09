import React, { createContext, useEffect } from 'react'
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages'
import axios from 'axios';
import { useConversations } from '../../context/ConversationsProvider';
import UserContext from '../../context/UserProvider';
import './MessagingPage.css'

function MessagingPage() {

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
            </div>
            <div className='messaging'>
                <Messages />
            </div>
        </div>
    )
}

export default MessagingPage;