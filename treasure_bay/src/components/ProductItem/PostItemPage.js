import React from 'react'
import PostItem from './Postitem.css'
import Upload from './upload.png'

function PostItemPage() {
  return (
    <>
        
        <div class="container">
        <form action="/action_page.php">
            <div class="row">
                <div class="col-25">
                      <label >Product Name</label>
                </div>
                <div class="col-75">
                      <input type="text" id="pname" name="pname" ></input>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                      <label >Product Price</label>
                </div>
                <div class="col-75">
                      <input type="text" id="lname" name="pprice"></input>
        
                </div>
            </div>
            <div class="row">
                      <div class="col-25">
                      <label >Product Details</label>
            </div>
            <div class="col-75">
                      <textarea id="subject" name="subject" rows="10" cols="50"></textarea>
       
            </div>
            </div> 
            <div class="row">
            <div class="col-25">
                  <label >Product Description</label>
            </div>
            <div class="col-75">
                  <textarea id="description" name="Description" rows="10" cols="50"></textarea>
            </div>
      </div> 
  
      
      <div class="row">
      <div class="col-25">
              <label >Product image</label>
      </div>
      
      </div>
      <div class="col-75">
          {/* <img src="upload.png" alt="upload file" width="100px" height="100px"></img> */}
          
          <form class="box" method="post" action="" enctype="multipart/form-data"  >
           
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
          <input type="submit" value="Submit"></input>
      </div>
      </form>
     

      </div>

    </>
  )
}

export default PostItemPage;