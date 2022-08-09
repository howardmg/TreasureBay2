import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PicCarousel({ image_url, key }) {
  console.log(image_url);
  return (
    <CaroPicsContainer className="pricingCarouselContainer">
      <Carousel className="pic" showIndicators={false} showStatus={false}>
        {image_url.map((images) => (
          <div>
            <img key={key} alt="" src={images}></img>
          </div>
        ))}
      </Carousel>
    </CaroPicsContainer>
  );
}

export default PicCarousel;

const CaroPicsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 360px;
  height: 800px;
`;
//  Carousel = styled.div`
//   border: #0D99FF 3px solid;
//   border-radius: 10px;
//   width:100px;
//   height: 100px;
// `;
