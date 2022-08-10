import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children }) {

    const [socket, setSocket] = useState('')

    useEffect(() => {
        const newSocket = io('rds-postgres-blueocean.czfvuzdlopph.us-east-1.rds.amazonaws.com/')
        setSocket(newSocket)
        return () => newSocket.close()
    }, [])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}