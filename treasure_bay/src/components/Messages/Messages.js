import React from 'react'
import MessagingInput from './MessagingInput'
import './Messages.css'
import { useConversations } from '../../context/ConversationsProvider'

function Messages() {

  const { selectedConversationIndex, messages } = useConversations()

  const formatMessages = messages.filter(
    msg => msg.sender_id === selectedConversationIndex
  ).map((message, index) => {
    return (
      <div className='message-sent'>
        <p key={index} className='from-me'>{message.message}</p>
      </div>
    )
  })

  return (
    <div className='messaging-container-test'>
      <div className='messages-wrapper'>
        {formatMessages}
      </div>
      <div className='typing-container'>
        <MessagingInput />
      </div>
    </div>
  )
}

export default Messages