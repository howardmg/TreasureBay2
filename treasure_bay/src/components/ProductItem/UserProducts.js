import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react'
import SingleProductContext from "../../context/ProductProvider";

function UserProducts({id}) {

    const {singleProduct, setSingleProduct} = useContext(SingleProductContext)
    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("")
    const [ userProduct, setUserProduct] = useState(null)
    let navigate = useNavigate();


    useEffect(()=>{
        profileProducts()
    },[] )
  
  
  
   async function profileProducts (){
      
      await fetch(`http://localhost:3025/profileproducts/3`)
      .then((response) => response.json())
      .then((data) => setUserProduct(data))
      setLoading(false)
     
  }

console.log(userProduct)
    const handleSingleProduct = (e) => {
        e.preventDefault()
        setLoadingMessage('Products are loading')
        fetch(`http://localhost:3025/product/${e.target.id}`)
          .then((response) => response.json())
          .then((data) => setSingleProduct(data)) 
          .then(navigate('/productitem'))
          setLoading(false)
         
      };

      

  return (
    loading ? (<div></div>) :
    (<div>UserProducts
        {/* {userProduct.map((data) => ( */}
{/* <UserProductsContainer id={data.product_id} className="productcontainer">
      <UserProductCard>
        

        <UserProductEach id={data.product_id} onClick={handleSingleProduct}>
          <UserProductName id={data.product_id}>{data.product_name}</UserProductName>
          
          <PicImg id={data.product_id} src={data.image_url} />
          <UserProductPrice id={data.product_id}>{data.price}</UserProductPrice>

          
          <UserProfile id={data.product_id}>
            {" "}
            Seller:
            <UserProfileImg id={data.product_id} src={data.avatar} />
            <UserInfo id={data.product_id}>
              {data.first_name} {data.last_name}{" "}
            </UserInfo>
          </UserProfile>
        </UserProductEach>
        
      </UserProductCard>
    </UserProductsContainer> */}

{/* ))} */}
    </div>)
  )
}

export default UserProducts

const UserProductsContainer = styled.div`
/* height: 100vh; */
  margin-bottom: 40px;
`;

const UserProductCard = styled.div``;
const PicImg = styled.img`
  width: 250px;
  height: 300px;
`;
const ProductDescription = styled.div`
  text-align: center;
  width: 600px;
`;
const ProductAction = styled.div``;
const UserProductEach = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 40px;
  width: 300px;
  height: 450px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
const UserProductName = styled.div`
  font-size: 25px;
  font-weight: 500px;
  color: black;
  text-align: center;
`;
const UserProductPrice = styled.div`
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