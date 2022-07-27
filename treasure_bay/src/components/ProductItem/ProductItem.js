import React from 'react'
import styled from 'styled-components'
import PicCarousel from './PicCarousel';

function ProductItem({
    product_name,
    price,
    description,
    details,
    image_url,
    avatar
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
    <ProductAction>
      <ProductName>{product_name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <BuyButton>Buy Now</BuyButton>
      <Message>Message Seller</Message>
      <UserProfile>UserProfile
        <UserProfileImg src={avatar}/>
        <UserInfo></UserInfo>
      </UserProfile>
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
const ProductPrice = styled.div`
font-size: 35px;
font-weight: 500px
`
const BuyButton = styled.button`
width: 100px;
background-color: #0D99FF;
border-radius: 10px;
padding: 5px;
color: white;
margin-bottom: 10px;
`
const Message = styled.button`
width: 150px;
background-color: #fff;
border-radius: 10px;
padding: 5px;
color: #0d99ff;
border-color: #0d99ff;
`
const UserProfile = styled.div``
const UserProfileImg = styled.img``
const UserInfo = styled.div``