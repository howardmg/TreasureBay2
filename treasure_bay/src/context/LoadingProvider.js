import React, { createContext, useState } from 'react'

const LoadingContext = createContext('');

export const LoadingProvider = ({ children }) => {
     const [loading, setLoading] = useState(null)

     return (
          <LoadingContext.Provider value={{ loading, setLoading }}>
               {children}
          </LoadingContext.Provider>
     )
}

export default LoadingContext;