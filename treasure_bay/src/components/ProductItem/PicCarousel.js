import React from 'react'
import styled from 'styled-components'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PicCarousel({image_url, key}) {
  console.log(image_url)
  return (
    <CaroPics className="pricingCarouselContainer">
    <Carousel className="pic" showIndicators={false} showStatus={false}>
      {image_url.map((images) => (
        
        <div>
          <img key={key} alt="" src={images}></img>
        </div>
      ))}
    </Carousel>
  </CaroPics>
  )
}

export default PicCarousel

const CaroPics = styled.div`
width:400px;
height: auto;
`