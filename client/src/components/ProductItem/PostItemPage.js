import { React, useContext } from "react";
import PostItem from "./Postitem.css";
import UserContext from "../../context/UserProvider";

import { Link } from 'react-router-dom';

import { useState } from "react";
import DropZone from "../DropZone/DropZone";
import AppDropZone from "../DropZone/AppDropZone";
import styled from "styled-components";
import Success from './images/PostSuccess.gif';

function PostItemPage() {
  const [fileData, setFileData] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [images, setImages] = useState([]);
  const [imageSent, setImageSent] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [user_id, setUser_id] = useState(1);
  const [sold, setSold] = useState(false)

  const postItem = async (
    productName,
    price,
    details,
    description,
    images,
    user_id,
    sold
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
    // formData.append("images", images[0]);
    formData.append("user_id", user_id);
    formData.append("sold", sold);


    console.log(JSON.stringify(formData));
    console.log(images);

    await fetch("http://localhost:3025/postitem", {
      method: "POST",
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

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    // e.preventDefault();

    const data = new FormData();

    data.append("image", fileData);

    fetch("http://localhost:3025/images", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File sent successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
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
        <form>
          <div class="container">
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="pi"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label className="pn">Product Details</label>
              </div>
              <div class="col-75">
                <textarea
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
                <label className="pn">Product Description</label>
              </div>
              <div class="col-75">
                <textarea
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
                <label className="pn">Product Image</label>
              </div>
              <div class="col-75">
                <AppDropZone
                  images={images}
                  setImages={setImages}
                  setImageSent={setImageSent}
                />
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
                      sold
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

// Link = styled.link`
//   display: flex;
//   box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
//   height: 40px;
//   width: 350px;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   margin: auto;
//   font-family: "Pacifico", cursive;
//   font-size: 25px;
//   border: transparent;
//   background-color: white;
//   border-radius: 999px;
//   margin: 50px;
//   :hover {
//       background-color: #0D99FF;
//       color: white;
//       border-radius: 999px;
//       cursor: pointer;
//     }
// `