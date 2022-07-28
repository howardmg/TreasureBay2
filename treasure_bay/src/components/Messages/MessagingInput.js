import React, { useState } from "react";
import { useConversations } from "../../context/ConversationsProvider";

export default function MessagingInput() {

    const { setMessages } = useConversations()
    const [text, setText] = useState('')
    const [textHeight, setTextHeight] = useState('35px');

    const handleResize = (e) => {
        const scrollHeight = e.target.scrollHeight
        const height = scrollHeight - 10
        setTextHeight(height + "px")
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let message = {
            id: 2,
            sender_id: 1,
            message: text
        }
        setMessages((prevMessages) => {
            return [...prevMessages, message]
        })
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
                onChange={handleText}
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