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
                  formData.append("productName", productName);
                  formData.append("price", price);
                  formData.append("details", details);
                  formData.append("description", description);
                  formData.append("images", images[0]);
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


      // <form onSubmit={onSubmitHandler}>
      <form >
            <input 
                  placeholder='Product Name'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
            />
            <input 
                  placeholder='Product Price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
            />
            <textarea 
                  placeholder='Product Details'
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
            />
            <textarea 
                  placeholder='Product Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
            />
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
            {/* </div> */}
      </form>
  )
}

export default PostItemPage;