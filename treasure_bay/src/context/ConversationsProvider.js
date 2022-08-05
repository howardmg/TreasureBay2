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

    const [selectedConversationIndex, setSelectedConversationIndex] = useState()
    const [selectedConversation, setSelectedConversation] = useState()

    const [messages, setMessages] = useState([''])

    const addMessageToConversations = useCallback(({ receiver_id, sender_id, message }) => {
        console.log('hey')
        const messageInfo = {
            receiver_id,
            sender_id,
            message
        }

        setMessages((prevMessages) => {
            return [...prevMessages, messageInfo]
        })

    })

    useEffect(() => {
        if (socket == false) return


        //console.log(socket)
        socket.on('receive-message',
            addMessageToConversations, console.log('hellllllll'))
        return () => socket.off('recieve-message')
    }, [socket,
        addMessageToConversations])

    const sendMessage = (sender_id, receiver_id, message) => {
        console.log(sender_id, receiver_id, message)
        axios.post('http://localhost:3025/api/sendmessage', { message, sender_id, receiver_id })
        // .then((response) => {
        //     setMessages((prevMessages) => {
        //         return [...prevMessages, response.data]
        //     })
        // })

        // const messageInfo = {
        //     sender_id,
        //     receiver_id,
        //     message
        // }

        socket.emit('send-message', ({ receiver_id, sender_id, message }))
        //{ messageInfo })
        addMessageToConversations({ receiver_id, sender_id, message })
    }

    function createConversation(id, name) {
        setConversations(prevConversation => {
            return [...prevConversation, { id, name }]
        })
    }

    return (
        <ConversationsContext.Provider value={{ conversations, setConversations, createConversation, setSelectedConversationIndex, selectedConversationIndex, messages, sendMessage, setMessages, selectedConversation, setSelectedConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
}