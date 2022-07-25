import React from 'react'
import styled from 'styled-components'
import PicCarousel from './PicCarousel';

function ProductItem({
    product_name,
    price,
    description,
    details,
    image_url
}) {
  return (
    <ProductItemContainer>
    <ProductEach>
    <PicCarousel  image_url={image_url}/>
    
      <ProductDetails>
        <div>Details</div>
        {details}</ProductDetails>
      
      <ProductDescription>
      <div>Description</div>
      {description}</ProductDescription>
    </ProductEach>
    <ProductAction>Action
      <ProductName>{product_name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <BuyButton>BuyButton</BuyButton>
      <Message>message</Message>
      <UserProfile>UserProfile</UserProfile>
    </ProductAction>
    </ProductItemContainer>
  )
}

export default ProductItem

const ProductItemContainer = styled.div`
display: flex;
flex-direction: row;
/* width: 900px; */

`
const ProductDescription = styled.div`
text-align: left;
width: 700px;
`
const ProductAction = styled.div`
display: flex;
flex-direction: column;
/* background-color: #393939; */
/* color: white; */
margin-top: 20px;
margin-right: 40px;
width: auto;
height: auto;
/* text-align:center; */
/* border-radius: 25px;  */
`
const ProductEach = styled.div`
display: flex;
flex-direction: column;
/* background-color: #393939; */
/* color: white; */
margin-top: 20px;
margin-right: 40px;
width: 750px;
height: auto;
/* text-align:center; */
/* border-radius: 25px;  */
justify-content: center;
align-items: center;
`

const ProductDetails = styled.div`
width: auto;
text-align: left;
margin: 10px;
padding: 10px;
`
const ProductName = styled.div`
font-size: 35px;
font-weight: 500px
`
const ProductPrice = styled.div``
const BuyButton = styled.div``
const Message = styled.div``
const UserProfile = styled.div``