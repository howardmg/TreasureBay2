import styled from 'styled-components';
import Image from './Image';


const ShowImage = ({ images }) => {
  const show = (image) => {
    return <Image image={image} />;
  };
  return (
     <ImagePreviewContainer className="imagePreviewContainer">
          {images.map(show)}
     </ImagePreviewContainer>
  )

};
export default ShowImage;

const ImagePreviewContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: row;
     img{
          height: 150px;
          width: 150px;
     }
`