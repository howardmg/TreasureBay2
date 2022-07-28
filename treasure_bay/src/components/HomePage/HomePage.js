import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import axios from "axios";

function HomePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = async () => {
    try{
      const response = await axios.get(`http://localhost:3025/images`)
      .then((response) => setImages(response))
      setLoading(false)
    }catch(error){

    }
    
  }

  if(loading){
    return <h1>Loading..</h1>
  } else {
    return (
      <div className='homepage'>
            Home Page
            <img src={images.data[6].image_url}></img>
      </div>
    )

  }


}

export default HomePage