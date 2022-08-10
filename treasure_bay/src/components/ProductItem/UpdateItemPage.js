import { React, useContext } from "react";
import PostItem from "./Postitem.css";
import UserContext from "../../context/UserProvider";

import { Link } from 'react-router-dom';

import { useState } from "react";
import DropZone from "../DropZone/DropZone";
import AppDropZone from "../DropZone/AppDropZone";
import styled from "styled-components";
import Success from './images/PostSuccess.gif';
import SingleProductContext from "../../context/ProductProvider";

function PostItemPage() {
  const { singleProduct, setSingleProduct } = useContext(SingleProductContext);
  const [fileData, setFileData] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [images, setImages] = useState([]);
  const [imageSent, setImageSent] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [user_id, setUser_id] = useState(1);
  const [loadingMessage, setLoadingMessage] = useState("Products are loading");
  
  // console.log(singleProduct)



  const postItem = async (
    productName,
    price,
    details,
    description,
    images,
    user_id,
  
  ) => {
    user_id = user[0].user_id;
    const formData = new FormData();
    console.log(imageSent);
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }
    
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("details", details);
    formData.append("description", description);
    formData.append("user_id", user_id);
  


    console.log(JSON.stringify(formData.images));
    console.log(images);

    await fetch(`http://localhost:3025/update/${singleProduct[0].product_id}`, {
      method: "PUT",
      body: formData,
    })
      .then((result) => {
        console.log("File sent successfully");
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setSuccess(true);
  };


  return (
    <>
      {success === true ? (
        <PostPageContainer>
        <SuccessHeader>Your item has been posted!</SuccessHeader>
        <StyledImage src={Success}></StyledImage>
        {/* <Link to='/postanitem'>Post another item</Link> */}
        <Link to='/'>Return Home</Link>
        
      </PostPageContainer>
      ) : (


      <>
          {!singleProduct ? (
        <div>
          <h1>{loadingMessage}</h1>
        </div>
      ) : (
        <form>
          <div class="container">
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  placeholder={singleProduct[0].name}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="pi"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Price</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  placeholder={singleProduct[0].price}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="pi"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Description</label>
              </div>
              <div class="col-75">
                <textarea
                placeholder={singleProduct[0].description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="pi"
                  rows="7"
                  cols="50"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Details</label>
              </div>
              <div class="col-75">
                <textarea
                placeholder={singleProduct[0].details}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="pi"
                  rows="7"
                  cols="50"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Image</label>
              </div>
              <div class="col-75">
                <AppDropZone
                
                  images={images}
                  setImages={setImages}
                  setImageSent={setImageSent}
                />
                <CurrentTitle>These are your current images</CurrentTitle>
                <CurrentImgContainer> 
                  
                {singleProduct[0].image_url.map((currentimages,index) => (
          <CurrentImgs id={index} alt="" src={currentimages} onClick={(e)=>{
            console.log(e)
          }}>
        
          </CurrentImgs>
        ))}
        </CurrentImgContainer>
                <button
                  className="btn"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    postItem(
                      productName,
                      price,
                      details,
                      description,
                      imageSent,
                      user_id,
                    
                    );
                    // setFileData(images[0]);
                    // console.log(images[0])
                    // onSubmitHandler();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
            <div class="row">
              {/* <DropZone images={images} setImages={setImages}/> */}

              {/* <div className="box__input">
                  <input
                        className="box__file"
                        type="file"
                        onChange={fileChangeHandler}
                  /> */}
            </div>
          </div>
        </form>
      )}
      </>
      )}
    </>
  );
}

export default PostItemPage;


const SuccessHeader = styled.h1`
  color: #0D99FF;
`

const StyledImage = styled.img`
  margin-top: 40px;
  height: 500px;
  width: 700px;
`

const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`

const CurrentImgContainer = styled.div`
display: flex;
justify-content: center;
`
const CurrentTitle = styled.h3`
text-align: center;
margin: 20px;
`
const CurrentImgs = styled.img`
height: 200px;
`