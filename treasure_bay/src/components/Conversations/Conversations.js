import React from 'react'
import { useConversations } from '../../context/ConversationsProvider'
import { useSocket } from '../../context/SocketProvider'
import './Conversations.css'

function Conversations() {

    const { conversations, setSelectedConversation,
        setSelectedConversationID, selectedConversationID } = useConversations()

    const socket = useSocket()

    let formatConversations = () => conversations.map((conversation, index) => {
        return (
            <div className={selectedConversationID === conversation.conversation_id ? 'active conversation' : 'conversation'} key={index}
                onClick={() => {
                    setSelectedConversation(conversation)
                    setSelectedConversationID(conversation.conversation_id)
                    socket.emit('join-conversation', conversation.conversation_id)
                }}
            >
                <div className='sender-profile'>
                    <img alt='pfp' src={conversation.avatar}
                        style={{ borderRadius: '50%', height: '50px', width: '50px' }} />
                    <h3 className='conversation-name'>{conversation.first_name} {conversation.last_name}</h3>
                </div>
                {/* <p className='message'>{conversation.message} {conversation.time}</p> */}
            </div>
        )
    })

    return (
        <div className='messages'>
            <div className='conversations-container'>
                <h2 className='conversations-title'>Conversations</h2>
                {conversations && formatConversations()}
            </div>
        </div>
    )
}

export default Conversations