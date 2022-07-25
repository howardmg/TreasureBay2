import React from 'react'
import PostItem from './Postitem.css'
import Dropzone, { useDropzone } from 'react-dropzone';
import { useState } from 'react';

function PostItemPage() {
     
            const [name, setname]=useState('flag')
            const [price, setprice]=useState(200.00)
            const [details, setdetails]=useState('american flag')
            const [description, setdescription]=useState('blue and white')
            const [image, setimage]=useState(['https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
            'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'])
            
                                                                  

function addNewProduct(data){

      let obj={
            name: name,
            price: price,
            details: details,
            description: description,
            image_url: image,
            user_id: 1

      }
     
      fetch("http://localhost:3025/createproducts",{
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(obj),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
           
         });
   };

  return (
    <>
        
        <div class="container">
        
            <div class="row">
                <div class="col-25">
                      <label className="pn" >Product Name</label>
                </div>
                <div class="col-75">
                      <input type="text" name="name" className="pi" ></input>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                      <label className="pn">Product Price</label>
                </div>
                <div class="col-75">
                      <input type="text" name="price" className="pi"></input>
        
                </div>
            </div>
            <div class="row">
                      <div class="col-25">
                      <label className="pn">Product Details</label>
            </div>
            <div class="col-75">
                      <textarea id="detail" name="detail" className="pi" rows="10" cols="50"></textarea>
       
            </div>
            </div> 
            <div class="row">
            <div class="col-25">
                  <label className="pn">Product Description</label>
            </div>
            <div class="col-75">
                  <textarea id="description" name="description" className="pi" rows="10" cols="50"></textarea>
            </div>
      </div> 
  
      
      <div class="row">
      <div class="col-25">
              <label className="pn" >Product image</label>
      </div>
      
      </div>
      <div class="col-75">
         
          
          <form class="box" method="post" action="" enctype="multipart/form-data"  >
     
           <div class="box__input"  >
          
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                
                <span class="box__dragndrop"> or drag it here</span>
                <button class="box__button" type="submit" onClick={addNewProduct}>Upload</button>
          </div>
          <div class="box__uploading">Uploading…</div>
          <div class="box__success">Done!</div>
          <div class="box__error">Error! <span></span>.</div>
          </form>  
      </div>

      <div class="row">
          <button className="btn" onClick={addNewProduct}>Submit</button>
      </div>
 
     

      </div>

    </>
  )
}

export default PostItemPage;