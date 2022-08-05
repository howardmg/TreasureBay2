import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import PicCarousel from "./PicCarousel";
import avatar2 from "./images/joshua.png";
import SingleProductContext from "../../context/ProductProvider";

function ProductItem() {
  const { singleProduct, setSingleProduct } = useContext(SingleProductContext);
  // useEffect(() => {
  //   const currentProduct = localStorage.getItem("currentProduct");
  //   if (currentProduct !== null) {
  //     setSingleProduct(JSON.parse(currentProduct));
  //   }
  // }, [singleProduct]);
  // localStorage.setItem("currentProduct", JSON.stringify([singleProduct]) )
  console.log(singleProduct);

  // const currentProduct = localStorage.getItem("currentProduct");
  //   if (currentProduct !== null) {
  //     setSingleProduct(JSON.parse(currentProduct));
  //   }

  return (
    <>
      {!singleProduct ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <ProductItemContainer className="productsingle">
          <ProductEach>
            <PicCarousel image_url={singleProduct[0].image_url} />
          </ProductEach>
          <ProductAction>
            <UserProfile>
              <UserProfileImg src={singleProduct[0].avatar} />
              <UserInfo>
                {singleProduct[0].first_name} {singleProduct[0].last_name}{" "}
              </UserInfo>
            </UserProfile>
            <ProductName>{singleProduct[0].product_name}</ProductName>
            <ProductPrice>{singleProduct[0].price}</ProductPrice>
            <BuyButton>Buy Now</BuyButton>
            <Message>Message Seller</Message>

            <ProductDescription>
              <h3>Description</h3>
              {singleProduct[0].description}
            </ProductDescription>

            <ProductDetails>
              <h3>Details</h3>
              {singleProduct[0].details}
            </ProductDetails>
          </ProductAction>
        </ProductItemContainer>
      )}
    </>
  );
}

export default ProductItem;

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  /* width: 900px; */
  height: 100vh;
  margin-bottom: 30px;
`;
const ProductDescription = styled.div`
  text-align: left;
  width: 600px;
  margin-top: 10px;
`;
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
`;
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
`;

const ProductDetails = styled.div`
  text-align: left;
  width: 600px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const ProductName = styled.div`
  font-size: 35px;
  font-weight: 500px;
  color: black;
`;
const ProductPrice = styled.div`
  font-size: 35px;
  font-weight: 500px;
  color: black;
`;
const BuyButton = styled.button`
  width: 150px;
  height: 30px;
  background-color: #0d99ff;
  border-radius: 10px;
  padding: 5px;
  color: white;
  margin-bottom: 10px;
  border: none;
`;
const Message = styled.button`
  width: 150px;
  height: 30px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  color: #0d99ff;
  border-color: #0d99ff;
`;
const UserProfile = styled.div`
  color: black;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
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
  background-color: #0d99ff;
`;
const UserInfo = styled.div`
  font-size: 23px;
`;

