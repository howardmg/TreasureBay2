import React from 'react'
import PostItem from './Postitem.css'
import Dropzone, { useDropzone } from 'react-dropzone';

function PostItemPage() {

function addNewProduct(data){
      console.log(data)
      fetch("http://localhost:3255/users/products", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((response) => {
            console.log(response);
            
         });
      
}
  return (
    <>
        
        <div class="container">
        {/* <form> */}
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
         
          
          {/* <form class="box" method="post" action="" enctype="multipart/form-data"  >
          {/* <Dropzone/> */}
          {/* <div class="box__input"  >
          
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                
                <span class="box__dragndrop"> or drag it here</span>
                <button class="box__button" type="submit">Upload</button>
          </div>
          <div class="box__uploading">Uploading…</div>
          <div class="box__success">Done!</div>
          <div class="box__error">Error! <span></span>.</div>
          </form>   */}
      </div>

      <div class="row">
          <button className="btn" onClick={addNewProduct}>Submit</button>
      </div>
      {/* </form> */}
     

      </div>

    </>
  )
}

export default PostItemPage;