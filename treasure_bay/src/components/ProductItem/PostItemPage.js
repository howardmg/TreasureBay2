import React from 'react'
import PostItem from './Postitem.css'
import Dropzone, { useDropzone } from 'react-dropzone';
import axios from "axios";

import { useState } from 'react';


function PostItemPage() {
    
      const [name, setname]=useState('')
      const [price, setprice]=useState(0)
      const [details, setdetails]=useState('')
      const [description, setdescription]=useState('')
      const [image, setimage]=useState([])
      const [user_id,setuser_id]=useState(1)

      const addNewProduct = async (name,price,details,description,file,user_id) => {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("details", details);
            formData.append("description", description);
            formData.append("file", file);
            formData.append("user_id", user_id);
            try{
                  const response=await axios.post("http://localhost:3025/createproducts", formData)
                  console.log(response)
                  console.log('Product created')
                  for (const value of formData.values()) {
                        console.log(value);
                      }
            } catch(err){
                  console.log(err)
            }
            
            
        }


      // function addNewProduct(event){
      //       event.preventDefault()
      //       const obj={
      //                    name: name,
      //                    price: price,
      //                    details: details,
      //                    description: description,
      //                    image:image,
      //                    user_id: 2
      //               }

      //       console.log(obj)
      //       fetch("http://localhost:3025/createproducts",{
      //             method: "POST",
      //             headers: {
      //             "Content-Type": "application/json",
      //             },
      //             body: JSON.stringify(obj),
      //       })
      //       .then((res) => res.json())
      //       .then((data) => {
      //             console.log(data);
           
      //       });
      // };

   
   
      return (
      <>
      <form>
      
        <div class="container">
       
            <div class="row">
                <div class="col-25">
                      <label className="pn" >Product Name</label>
                </div>
                <div class="col-75">
                      <input type="text" value={name} onChange={(e) => setname(e.target.value )} className="pi" 
                      />
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                      <label className="pn">Product Price</label>
                </div>
                <div class="col-75">
                      <input type="text" value={price} onChange={(e) => setprice(e.target.value )} className="pi" />
        
                </div>
            </div>
            <div class="row">
                      <div class="col-25">
                      <label className="pn">Product Details</label>
            </div>
            <div class="col-75">
                      <textarea value={details} onChange={(e) => setdetails(e.target.value )} className="pi" rows="10" cols="50"></textarea>
       
            </div>
            </div> 
            <div class="row">
            <div class="col-25">
                  <label className="pn">Product Description</label>
            </div>
            <div class="col-75">
                  <textarea value={description} onChange={(e) => setdescription(e.target.value )} className="pi" rows="10" cols="50"></textarea>
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
          {/* <form action="/images" method="POST"
           encType="multipart/form-data"> */}
           
            <input type="file" name="image"  onChange={(e) => setimage(e.target.value )} /> 
            
            <button type="submit" className="btn" onClick={(e) => { 
                            e.preventDefault(); addNewProduct(name,price,details,description,image,user_id)}} >Submit</button>
           
                           
         
      </div>
     
     

      </div>
      </form> 
    </>
  )
}

export default PostItemPage;