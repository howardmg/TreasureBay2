import React from 'react'
import './Conversations.css'

function Conversations() {
    return (
        <div className='messages'>
            <div className='conversations-container'>
                <h2 className='conversations-title'>Conversations</h2>
                <div className='conversation'>
                    <div className='sender-profile'>
                        <img alt='pfp' src='https://picsum.photos/50' style={{ borderRadius: '50%' }} />
                        <h3 className='conversation-name'>John Doe</h3>
                    </div>
                    <p className='message'>This is the message 3:13pm</p>
                </div>
            </div>
        </div>
    )
}

export default Conversations