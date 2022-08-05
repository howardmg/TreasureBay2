import React, { useContext, useEffect, useState } from 'react'
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages'
import axios from 'axios';
import { useConversations } from '../../context/ConversationsProvider';
import { UserProvider } from '../../context/UserProvider';
import './MessagingPage.css'

function MessagingPage() {

    const [user, setUser] = useState({
        user_id: 2,
        first_name: "Steve",
        last_name: "Baker",
        zipcode: 12345,
        city: "Austin",
        state: "Texas",
        email: "sbaker@test.com",
        password: "test321",
        avatar: "https://pixabay.com/get/g5711da399285486c38d711b496067624a855671ca73a12b5326b17a178dfae93ad82595828f659bfb6d1979b2712df811c532274664aee44d244ae28b5048e35_1920.jpg"
    })

    const { setMessages, setConversations } = useConversations()
    const ID = localStorage.getItem('id')
    useEffect(() => {
        axios.get(`http://localhost:3025/conversations/${ID}`).then((response) => {
            setConversations(response.data)
        })
        axios.get('http://localhost:3025/messages').then((response) => {
            setMessages(response.data)
        })
    }, [setUser])


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