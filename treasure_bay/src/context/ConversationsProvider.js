import axios from 'axios'
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useSocket } from './SocketProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {

    const socket = useSocket()

    const [conversations, setConversations] = useState([])
    const [selectedConversationID, setSelectedConversationID] = useState()
    const [selectedConversation, setSelectedConversation] = useState()
    const [messages, setMessages] = useState([''])

    const addMessageToConversations = useCallback(({ conversation_id, sender_id, receiver_id, text }) => {

        const messageObj = {
            conversation_id,
            sender_id,
            receiver_id,
            message: text
        }

        setMessages((prevMessages) => {
            return [...prevMessages, messageObj]
        })

        return

    })

    useEffect(() => {
        if (!socket) return

        socket.on('receive-message', addMessageToConversations)
        return () => socket.off('receive-message')
    }, [socket, addMessageToConversations])

    const sendMessage = (conversation_id, sender_id, receiver_id, text) => {
        axios.post('http://localhost:3025/api/sendmessage', { conversation_id, sender_id, receiver_id, text })
        socket.emit('send-message', ({ conversation_id, sender_id, receiver_id, text }))
        addMessageToConversations({ conversation_id, sender_id, receiver_id, text })
    }

    const createConversation = (sender_id, receiver_id) => {
        axios.post('http://localhost:3025/addconversation', { sender_id, receiver_id })
            .then((response) => {
                setSelectedConversationID(response.conversation_id)
            })
    }

    return (
        <ConversationsContext.Provider value={{ conversations, setConversations, createConversation, setSelectedConversationID, selectedConversationID, messages, sendMessage, setMessages, selectedConversation, setSelectedConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
}