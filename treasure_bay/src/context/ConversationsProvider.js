import React, { useContext, useState } from 'react'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {

    const [conversations, setConversations] = useState(
        [{
            id: 1,
            name: "John Doe",
            message: "This is the message",
            picture: "https://picsum.photos/50",
            time: "3:13pm"
        },
        {
            id: 2,
            name: "Jane Doe",
            message: "This is another message",
            picture: "https://picsum.photos/50",
            time: "3:13pm"
        }]
    )

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(1)
    const [messages, setMessages] = useState([])

    function createConversation(id, name) {
        setConversations(prevConversation => {
            return [...prevConversation, { id, name }]
        })
    }

    return (
        <ConversationsContext.Provider value={{ conversations, setConversations, createConversation, setSelectedConversationIndex, selectedConversationIndex, messages, setMessages }}>
            {children}
        </ConversationsContext.Provider>
    )
}