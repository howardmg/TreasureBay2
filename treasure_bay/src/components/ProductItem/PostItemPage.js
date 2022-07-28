import React from 'react'
import PostItem from './Postitem.css'



import { useState } from 'react';
import DropZone from '../DropZone/DropZone';

function PostItemPage() {

      const [fileData, setFileData] = useState([])
      const [productName, setProductName] = useState('')
      const [price, setPrice] = useState(0)
      const [details, setDetails] = useState('')
      const [description, setDescription] = useState('')
      const [user_id, setUser_id] = useState(1)
      const [images, setImages] = useState([])

      const postItem = async (productName, price, details, description, images, user_id) => {

            const formData = new FormData();
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
                  
            console.log(JSON.stringify(formData))
            console.log(images[0])

           
              
                    
            
            await fetch("http://localhost:3025/postitem", {
                  method: 'POST',
                  body: formData,
            })
            .then((result) => {
                  console.log("File sent successfully")
                  console.log(result)
            })
            .catch((err) => {
                  console.log(err.message)
            });
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
        <form>
        <div class="container">
            <div class="row">
                <div class="col-25">
                      <label className="pn" >Product Name</label>
                </div>
                <div class="col-75">
                      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value )} className="pi"
                      />
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                      <label className="pn">Product Price</label>
                </div>
                <div class="col-75">
                      <input type="text" value={price} onChange={(e) => setPrice(e.target.value )} className="pi" />
                </div>
            </div>
            <div class="row">
                      <div class="col-25">
                      <label className="pn">Product Details</label>
            </div>
            <div class="col-75">
                      <textarea value={details} onChange={(e) => setDetails(e.target.value )} className="pi" rows="10" cols="50"></textarea>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                  <label className="pn">Product Description</label>
            </div>
            <div class="col-75">
                  <textarea value={description} onChange={(e) => setDescription(e.target.value )} className="pi" rows="10" cols="50"></textarea>
            </div>
      </div>
      <div class="row">
      <div class="col-25">
              <label className="pn" >Product image</label>
      </div>
      </div>
      <div class="col-75">
      </div>
      <div class="row">
      
      
            <DropZone images={images} setImages={setImages}/>
            {/* <div className="box__input">
                  <input
                        className="box__file"
                        type="file"
                        onChange={fileChangeHandler}
                  /> */}
                  <button className="box__button" type="submit" onClick={(e) => {
                        e.preventDefault();
                        postItem(productName, price, details, description, images, user_id)
                        // setFileData(images[0]);
                        // console.log(images[0])
                        // onSubmitHandler();
                  }}>
                        Submit
                  </button>
            </div>
            </div>
      </form>
      </>
  )
}

export default PostItemPage;