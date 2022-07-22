import React from 'react'
import MessagingInput from './MessagingInput'
import './Messages.css'

function Messages() {

  const messageSent = ['hello my name is aaron']
  const MessagesSent = messageSent.map((message, index) => {
    return (

      <p key={index} className='from-me'>{message}</p>
    )
  })

  return (
    <div className='messaging-container-test'>
      <div className='messages-wrapper'>
        <div className='message-sent'>{MessagesSent}</div>
      </div>
      <div className='typing-container'>
        <MessagingInput />
      </div>
    </div>
  )
}

export default Messages