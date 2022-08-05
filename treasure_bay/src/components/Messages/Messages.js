import React, { useRef, useEffect } from 'react'
import MessagingInput from './MessagingInput'
import './Messages.css'
import { useConversations } from '../../context/ConversationsProvider'

function Messages() {

  const { selectedConversationID, messages, selectedConversation } = useConversations()

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  //console.log(messages)
  const formatMessages = () => messages.filter(
    msg => msg.receiver_id === selectedConversation.user_id || msg.sender_id === selectedConversation.user_id
  ).map((message, index) => {
    //console.log(message)
    //console.log(selectedConversation.user_id)
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
          <div>Please Select a Conversation</div>}
        <div ref={messagesEndRef}></div>
      </div>
      <div className='typing-container'>
        <MessagingInput />
      </div>
    </>
  )
}

export default Messages