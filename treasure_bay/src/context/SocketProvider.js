import React, { useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children }) {
    const [socket, setSocket] = useState('')
    const [id, setid] = useState(1)

    useEffect(() => {
        const newSocket = io('http://localhost:3025',
            { query: { id } })
        setSocket(newSocket)
        return () => newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}