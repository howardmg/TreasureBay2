import React, { useCallback, useState } from 'react';
import ShowImage from './ShowImage';
import DropBox from './DropBox';


function AppDropZone({images, setImages, setImageSent }) {
//   const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      setImageSent((prevState) => [...prevState, file])
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div className="AppDropZone">
          <DropBox onDrop={onDrop} setImageSent={setImageSent}  />
          <ShowImage images={images} />
    </div>
  );
}
export default AppDropZone;