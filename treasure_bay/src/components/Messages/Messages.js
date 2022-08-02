import React from 'react'
import MessagingInput from './MessagingInput'
import './Messages.css'
import { useConversations } from '../../context/ConversationsProvider'

function Messages() {

  const { selectedConversationID, messages } = useConversations()

  const formatMessages = messages.filter(
    msg => msg.reciever_id === selectedConversationID
  ).map((message, index) => {
    return (
      <div className='message-sent'>
        <p key={index} className='from-me'>{message.text}</p>
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