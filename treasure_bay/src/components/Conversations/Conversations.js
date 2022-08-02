import React from 'react'
import { useConversations } from '../../context/ConversationsProvider'
import './Conversations.css'

function Conversations() {

    const { conversations, setSelectedConversationID, selectedConversationID } = useConversations()

    let formatConversations = conversations.map((conversation, index) => {
        return (
            <div className={selectedConversationID === conversation.id ? 'active conversation' : 'conversation'} key={index}
                onClick={() => setSelectedConversationID(conversation.id)}
            >
                <div className='sender-profile'>
                    <img alt='pfp' src={conversation.picture} style={{ borderRadius: '50%' }} />
                    <h3 className='conversation-name'>{conversation.name}</h3>
                </div>
                <p className='message'>{conversation.message} {conversation.time}</p>
            </div>
        )
    })

    return (
        <div className='messages'>
            <div className='conversations-container'>
                <h2 className='conversations-title'>Conversations</h2>
                {formatConversations}
            </div>
        </div>
    )
}

export default Conversations