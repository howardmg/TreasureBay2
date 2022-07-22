import React, { useState } from "react";

export default function MessagingInput() {

    const [textHeight, setTextHeight] = useState('35px');

    function handleResize(e) {
        const scrollHeight = e.target.scrollHeight
        const height = scrollHeight - 10
        setTextHeight(height + "px")
    }

    return (
        <form className="message-form">
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