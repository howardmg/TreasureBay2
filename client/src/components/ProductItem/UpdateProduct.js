import React, { useEffect, useState} from 'react'
import UpdateItemPage from './UpdateItemPage'

function UpdateProduct() {
    

  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Products are loading");

  

  return (
    <>
        {!singleProduct ? (
        <div>
          <h1>{loadingMessage}</h1>
        </div>
      ) : (
    <div>UpdateProduct

        <UpdateItemPage/>

    </div>
      )}
    </>




  )
  
}

export default UpdateProduct