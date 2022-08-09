import React from "react";
import styled from "styled-components";
import PicCarousel from "./PicCarousel";
import avatar2 from "./images/joshua.png";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useState, useContext, useEffect } from "react";
import SingleProductContext from "../../context/ProductProvider";

function ProductMainCards({
  product_name,
  price,
  description,
  details,
  image_url,
  avatar,
  lname,
  fname,
  id,
}) {
  const { singleProduct, setSingleProduct } = useContext(SingleProductContext);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("");
  let navigate = useNavigate();

  // useEffect(() => {
  //   const currentProduct = localStorage.getItem("currentProduct");
  //   if (currentProduct !== null) {
  //     setSingleProduct(JSON.parse(currentProduct));
  //   }
  // }, [singleProduct]);

  const handleSingleProduct = (e) => {
    e.preventDefault();
    setLoadingMessage("Products are loading");
    fetch(`http://localhost:3025/product/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data))
      .then(navigate("/productitem"));
    setLoading(false);
  };

  // console.log(singleProduct);

  return (
    <div className="mainproductpage">
      <ProductItemContainer id={id} className="productcontainer">
        <ProductCard>
          <ProductEach id={id} onClick={handleSingleProduct}>
            <ProductName id={id}>{product_name}</ProductName>

            <PicImg id={id} src={image_url[0]} />
            <ProductPrice id={id}>{price}</ProductPrice>

            <UserProfile id={id}>
              {" "}
              Seller:
              <UserProfileImg id={id} src={avatar} />
              <UserInfo id={id}>
                {fname} {lname}{" "}
              </UserInfo>
            </UserProfile>
          </ProductEach>
        </ProductCard>
      </ProductItemContainer>
    </div>
  );
}

export default ProductMainCards;

const ProductItemContainer = styled.div`
  /* height: 100vh; */
  margin-bottom: 40px;
`;

const ProductCard = styled.div`
`;

const PicImg = styled.img`
  width: 250px;
  height: 250px;
  border: #0d99ff 3px solid;
  border-radius: 10px;
`;
const ProductDescription = styled.div`
  text-align: center;
  width: 600px;
`;
const ProductAction = styled.div``;
const ProductEach = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 40px;
  width: 300px;
  height: 450px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  border-radius: 10px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const ProductDetails = styled.div`
  width: 600px;
  text-align: left;
  margin: 10px;
  padding: 10px;
`;
const ProductName = styled.div`
  font-size: 25px;
  font-weight: 500px;
  color: black;
  text-align: center;
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500px;
  color: black;
  margin-top: 5px;
`;
const BuyButton = styled.button`
  width: 100px;
  background-color: #0d99ff;
  border-radius: 10px;
  padding: 5px;
  color: white;
  margin-bottom: 10px;
`;
const Message = styled.button`
  width: 150px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  color: #0d99ff;
  border-color: #0d99ff;
`;
const UserProfile = styled.div`
  color: black;
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const UserProfileImg = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 100%;
  height: 35px;
  margin-right: 4px;
  margin-left: 10px;
  vertical-align: middle;
  justify-content: left;
  width: 35px;
  background-color: #0d99ff;
`;
const UserInfo = styled.div`
  font-size: 20px;
`;
