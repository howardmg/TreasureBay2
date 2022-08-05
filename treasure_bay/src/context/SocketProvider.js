import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children }) {
    const ID = localStorage.getItem('id')
    console.log(ID)
    const [socket, setSocket] = useState('')

    useEffect(() => {
        const newSocket = io('http://localhost:3025',
            { query: { ID } })
        setSocket(newSocket)
        return () => newSocket.close()
    }, [ID])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}