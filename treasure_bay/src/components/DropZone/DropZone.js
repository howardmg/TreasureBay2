import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';


function DropZone({ images, setImages }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: acceptedFiles => {
      setImages(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));
    }
  });

  const thumbs = images.map(image => (
    <div
      style={thumb}
      key={image.name}
    >
      <div
        style={thumbInner}
      >
        <img
          alt=''
          src={image.preview}
          style={img}
          onLoad={() => { URL.revokeObjectURL(image.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data urls to avoid memory leaks
    return () => images.forEach(image => URL.revokeObjectURL(image.preview));
  }, [images]);
  return (
    <DropZoneContainer className="container">
      <Dropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop an image here or click to upload an image</p>
      </Dropzone>
      <aside
        style={thumbsContainer}
      >
        {thumbs}
      </aside>
    </DropZoneContainer>
  )
}

export default DropZone;

const DropZoneContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height:200px;
  margin: 10px auto;
  margin-bottom: 10px;
  margin-left:150px;
  border: 2px  black dotted;
  color: black;
  background-color: gray;
  height: 200px;
`

const Dropzone = styled.div`
  text-align: center;
  padding: 25px;
  width: 90%;
  /* margin: auto; */
  margin-bottom: 0px;
  :hover{
    cursor: pointer;
  }
`
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 5
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  // border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: '100%',
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '100px',
  height: '100%',
  borderRadius: '50%'
};