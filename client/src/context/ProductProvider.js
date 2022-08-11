import React, { createContext, useState } from 'react'


const SingleProductContext  = createContext('');

export const SingleProductProvider = ({ children }) => {
       const [singleProduct, setSingleProduct] = useState(null)

     return (
          <SingleProductContext.Provider  value={{ singleProduct, setSingleProduct }}>
               {children}
          </SingleProductContext.Provider>
     )
}

export default SingleProductContext;