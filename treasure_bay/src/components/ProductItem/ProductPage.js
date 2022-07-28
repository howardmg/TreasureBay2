import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ProductItem from './ProductItem';

function ProductPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState("")


  // if(loading) {
  //   setLoadingMessage('Products are loading')
  // }

  useEffect(() => {
    getProducts()
  },[])

  function getProducts (){
    setLoadingMessage('Products are loading')
    fetch('http://localhost:3025/all')
    .then((response) => response.json())
    .then((data) => setProducts(data))
    setLoading(false)
  }



  
  return (

    <ProductContainer className='productitempage'>
    {products.map((data) => (
      <ProductItem 
      key={data.product_id}
      product_name={data.name}
      price={data.price}
      description={data.description}
      details={data.details}
      image_url={data.image_url}
      avatar={data.avatar}
      fname={data.first_name}
      lname={data.last_name}
      />
      
    ))}

    
    </ProductContainer>
  )
}

export default ProductPage;

const ProductContainer = styled.div`

`

