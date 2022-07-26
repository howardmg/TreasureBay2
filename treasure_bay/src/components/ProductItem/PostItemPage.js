import React from 'react'
import PostItem from './Postitem.css'
import Dropzone, { useDropzone } from 'react-dropzone';

function PostItemPage() {
  return (
    <>
        
        <div class="container">
        <form action="/action_page.php">
            <div class="row">
                <div class="col-25">
                      <label className="pn" >Product Name</label>
                </div>
                <div class="col-75">
                      <input type="text" id="pname" className="pi" ></input>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                      <label className="pn">Product Price</label>
                </div>
                <div class="col-75">
                      <input type="text" id="lname" className="pi"></input>
        
                </div>
            </div>
            <div class="row">
                      <div class="col-25">
                      <label className="pn">Product Details</label>
            </div>
            <div class="col-75">
                      <textarea id="detail" className="pi" rows="7" cols="50"></textarea>
       
            </div>
            </div> 
            <div class="row">
            <div class="col-25">
                  <label className="pn">Product Description</label>
            </div>
            <div class="col-75">
                  <textarea id="description" className="pi" rows="7" cols="50"></textarea>
            </div>
      </div> 
  
      
      <div class="row">
      <div class="col-25">
              <label className="pn" >Product image</label>
      </div>
      
      </div>
      <div class="col-75">
          {/* <img src="upload.png" alt="upload file" width="100px" height="100px"></img> */}
          
          <form class="box" method="post" action="" enctype="multipart/form-data"  >
          {/* <Dropzone/> */}
          <div class="box__input"  >
          
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                
                <span class="box__dragndrop"> or drag it here</span>
                <button class="box__button" type="submit">Upload</button>
          </div>
          <div class="box__uploading">Uploading…</div>
          <div class="box__success">Done!</div>
          <div class="box__error">Error! <span></span>.</div>
          </form>  
      </div>

      <div class="row">
          <button className="btn">Submit</button>
      </div>
      </form>
     

      </div>

    </>
  )
}

export default PostItemPage;