import React from 'react'
import Conversations from '../Conversations/Conversations';
import Messages from '../Messages/Messages'
// import { io } from 'socket.io-client'
import './MessagingPage.css'
import {useState, useEffect} from 'react'

function MessagingPage() {

    const [conversations, setConversations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getConvo()
      },[])


    function getConvo (){
        fetch('http://localhost:3025/conversations')
        .then((response) => response.json())
        .then((data) => setConversations(data))
        setLoading(false)
      }
console.log(conversations)
    return (
        <div className='messaging-container'>
           
            <>
            <div className='conversations'>
            {/* {conversations.map((data, index) => ( */}
                <Conversations 
                avatar={conversations[0].avatar}
                // key={index}
                first_name={conversations[0].first_name}
                last_name={conversations[0].last_name}
                time={conversations[0].time}
                message={conversations[0].message}
                
                />
                {/* // ))} */}
            </div>
             
            </>
            <div className='messaging'>
            {conversations.map((data, index) => (
                <Messages 
                message={data.message}
                key={index}
                
                />
                ))}
            </div>
            
            
            
        </div>
    )
}

export default MessagingPage;