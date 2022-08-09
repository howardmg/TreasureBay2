import React, { useRef, useEffect } from 'react'
import MessagingInput from './MessagingInput'
import './Messages.css'
import { useConversations } from '../../context/ConversationsProvider'

function Messages() {

  const { messages, selectedConversation, selectedConversationID } = useConversations()

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, selectedConversation]);

  const formatMessages = () => messages.filter(
    msg => msg.conversation_id === selectedConversationID
    // (msg.receiver_id === selectedConversation.user_id) ||
    // (msg.sender_id === selectedConversation.user_id)
  ).map((message, index) => {
    return (
      <div className={message.sender_id !== selectedConversation.user_id ? 'sent' : 'received'}>
        <p key={index}>{message.message}</p>
      </div>
    )
  })

  return (
    <>
      <div className='messages-wrapper'>
        {selectedConversation ?
          formatMessages() :
          <div className='empty-conversation-message'>Please Select a Conversation</div>}
        <div ref={messagesEndRef}></div>
      </div>
      {selectedConversation &&
        <div className='typing-container'>
          <MessagingInput />
        </div>}
    </>
  )
}

export default Messages