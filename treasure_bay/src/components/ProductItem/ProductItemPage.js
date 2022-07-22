import React, { useState } from 'react'
import styled from 'styled-components'
import PicCarousel from 'react-responsive-carousel';

function ProductItemPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  return (

    <ProductContainer className='productitempage'>Product Container
    <ProductItem>ProductItem
      <ProductImageCarousel>ProductImageCarousel</ProductImageCarousel>
      <ProductDetails>details</ProductDetails>
      <ProductDescription>description</ProductDescription>
    </ProductItem>
    <ProductAction>Action
      <ProductName>ProductName</ProductName>
      <ProductPrice>ProductPrice</ProductPrice>
      <BuyButton>BuyButton</BuyButton>
      <Message>message</Message>
      <UserProfile>UserProfile</UserProfile>
    </ProductAction>
    
    </ProductContainer>
  )
}

export default ProductItemPage;

const ProductContainer = styled.div`
display: flex;
flex-direction: row;

`
const ProductDescription = styled.div``
const ProductAction = styled.div``
const ProductItem = styled.div``
const ProductImageCarousel = styled.div``
const ProductDetails = styled.div``
const ProductName = styled.div``
const ProductPrice = styled.div``
const BuyButton = styled.div``
const Message = styled.div``
const UserProfile = styled.div``