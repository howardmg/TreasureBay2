import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useSocket } from './SocketProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {

    const socket = useSocket()

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

    const [selectedConversationID, setSelectedConversationID] = useState(1)
    const [selectedConversation, setSelectedConversation] = useState(conversations[selectedConversationID])
    const [messages, setMessages] = useState([])

    const addMessageToConversations = useCallback((message) => {
        setMessages((prevMessages) => {
            return [...prevMessages, message]
        })
    }, [setMessages])

    useEffect(() => {
        if (!socket) {
            return
        }
        socket.on('recieve-message', addMessageToConversations)
        return () => socket.off('recieve-message')
    }, [socket, addMessageToConversations])

    const sendMessage = (user_id, reciever_id, text) => {

        const message = {
            user_id,
            reciever_id,
            text
        }

        socket.emit('send-message', { message })
        addMessageToConversations(message)
    }

    function createConversation(id, name) {
        setConversations(prevConversation => {
            return [...prevConversation, { id, name }]
        })
    }

    return (
        <ConversationsContext.Provider value={{ conversations, setConversations, createConversation, setSelectedConversationID, selectedConversationID, messages, sendMessage }}>
            {children}
        </ConversationsContext.Provider>
    )
}