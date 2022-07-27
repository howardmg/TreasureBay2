import React from 'react'
import { useConversations } from '../../context/ConversationsProvider'
import './Conversations.css'

function Conversations() {

    const { conversations, setSelectedConversationIndex, selectedConversationIndex } = useConversations()

    console.log(selectedConversationIndex)
    let formatConversations = conversations.map((contact, index) => {
        return (
            <div className={selectedConversationIndex === contact.id ? 'active conversation' : 'conversation'} key={index}
                onClick={() => setSelectedConversationIndex(contact.id)}
            >
                <div className='sender-profile'>
                    <img alt='pfp' src={contact.picture} style={{ borderRadius: '50%' }} />
                    <h3 className='conversation-name'>{contact.name}</h3>
                </div>
                <p className='message'>{contact.message} {contact.time}</p>
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