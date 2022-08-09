import React, { useState, useContext } from "react";
import { useConversations } from "../../context/ConversationsProvider";
import { UserContext } from "../../context/UserProvider";

export default function MessagingInput() {

    const { sendMessage, selectedConversation } = useConversations()
    const { user } = useContext(UserContext)
    const [text, setText] = useState('')
    const [textHeight, setTextHeight] = useState('35px');

    const handleResize = (e) => {
        const scrollHeight = e.target.scrollHeight
        const height = scrollHeight - 10
        setTextHeight(height + "px")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // window.scrollTo({ bottom: 0 })
        let sender_id = user.user_id
        let receiver_id = selectedConversation.user_id
        setTextHeight('30px')
        sendMessage(selectedConversation.conversation_id, sender_id, receiver_id, text)
        setText('')
    }

    return (
        <form
            className="message-form"
            onSubmit={handleSubmit}
        >
            <textarea style={{
                resize: 'none',
                overflowY: 'hidden',
                minHeight: '2rem',
                boxSizing: 'border-box',
                height: `${textHeight}`
            }}
                wrap='soft'
                rows={1}
                className='texting-input'
                type='text'
                placeholder="Message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={handleResize}>
            </textarea>
            <button
                type="submit"
                className="send-button">
                Send
            </button>
        </form>
    )
}