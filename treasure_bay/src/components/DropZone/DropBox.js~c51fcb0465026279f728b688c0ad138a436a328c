import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const borderColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};


function DropBox({ onDrop, setImageSent }) {

  const handleFile = (e) => {
    console.log(e)
    setImageSent(e.target.files[0]);
  }

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ));
  return (
    <>
      {' '}
      <section className="dropbox">
        <Container
          className="dropbox"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps({})} />
          <P>Drag & drop some images here</P>
          <P>or</P>
          <button type="button" className="btn" onClick={open}>
            Click to select images
          </button>
        </Container>
      </section>
      <>
          {lists.length !== 0 ? (
               <aside>
                    <h4>Image Preview:</h4>
                    <ListContainer>
                         <p>{lists}</p>
                    </ListContainer>
               </aside>           
          ) : (
               <></>
          )}
     </>
          

      

    </>
  );
}
export default DropBox;

const ListContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: row;
`

const Container = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => borderColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  outline: none;
  transition: border 0.24s ease-in-out;
  button{
     justify-self: center;
     align-self: center;
     width: 100%;
     margin: 0;
     font-size: 15px;
     margin-top: 5px;
  }
`;

const P = styled.p`
     margin-bottom: 5px;
`
