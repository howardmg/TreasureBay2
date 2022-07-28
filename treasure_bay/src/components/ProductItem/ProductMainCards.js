import React from 'react'
import styled from 'styled-components'
import PicCarousel from './PicCarousel';
import avatar2 from './joshua.png'
import { useNavigate } from 'react-router-dom';

function ProductMainCards({
    product_name,
    price,
    description,
    details,
    image_url,
    avatar,
    lname,
    fname,
    key
}) {
    let navigate = useNavigate()
    const routeChange = (e) => {
        console.log(e)
     let path = '/productitem'
     navigate(path)
    }

  return (


    <ProductItemContainer  >
    <ProductCard>
    
        <ProductEach id={key} onClick={routeChange}>
      {/* <PicCarousel  image_url={image_url}/> */}
      <UserProfile>
        <UserProfileImg src={avatar2}/> 
        <UserInfo>{fname} {lname} </UserInfo>
      </UserProfile>
      <PicImg src={image_url[0]}/>
      
      <ProductDescription>
      <div>Description:</div>
      {description}</ProductDescription>
      <ProductName>{product_name}</ProductName>
    <ProductPrice>{price}</ProductPrice>
      
    </ProductEach>
    {/* <ProductAction>
      <ProductName>{product_name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <BuyButton>Buy Now</BuyButton>
      <Message>Message Seller</Message>
      <UserProfile>
        <UserProfileImg src={avatar2}/> 
        <UserInfo>{fname} {lname} </UserInfo>
      </UserProfile>
    </ProductAction> */}
    </ProductCard>
    </ProductItemContainer>
  )
}

export default ProductMainCards

const ProductItemContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 50px;
/* width: 900px; */
height: auto;

`

const ProductCard = styled.div`
display: flex;
/* flex-direction: row; */
flex-wrap: wrap;
height: 150px;
`
const PicImg = styled.img`
width: 150px;
`
const ProductDescription = styled.div`
text-align: center;
width: 600px;
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
width: 600px;
text-align: left;
margin: 10px;
padding: 10px;
`
const ProductName = styled.div`
font-size: 35px;
font-weight: 500px;
color: black;
`
const ProductPrice = styled.div`
font-size: 35px;
font-weight: 500px;
color: black;
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
const UserProfile = styled.div`
color: black;
margin-top : 30px;
display: flex;
align-items: center;



`
const UserProfileImg = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 100%;
  height: 60px;
  margin-right: 4px;
  vertical-align: middle;
  justify-content: left;
  width: 60px;
  background-color: #0D99FF;
`
const UserInfo = styled.div`
font-size: 23px;
`