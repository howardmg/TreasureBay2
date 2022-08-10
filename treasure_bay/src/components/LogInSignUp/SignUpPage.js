import { React, useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';
import Check from './images/checkmark.png';
import Xmark from './images/xmark.png';
import Info from "./images/info.svg.png"
import DropZone from '../DropZone/DropZone';
import Chest from './images/chest.gif';


// const EMAIL_REGEX = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;
// password requires at least one lowercase letter, one uppercase letter, one digit
// and one special character and it can be anywhere from 8-24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUpPage() {

  // set the focus on user input when component loads
  const userRef = useRef();
  // announces error in validation to user  
  const errRef = useRef();

  //hooks
  // const { user, setUser } = useContext(UserContext);
  //state for user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  //email hooks
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  //password input
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  //password verification
  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  //state for error and success messages
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  //avatar drop zone
  const [images, setImages] = useState([])


  //checking to see if password field and the validate password field match
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword])

  //error message 
  //anytime user changes the state of email, password or match password
  //it will clear the error message from displaying
  useEffect(() => {
    setErrMsg('');
  }, [email, password, matchPassword])


  const signUp = async (firstName, lastName, city, state, zipcode, email, password, file) => {
    try {
      // const response = await axios.get(`http://localhost:3025/login/${email}`)
      const response = await axios.get(`rds-postgres-blueocean.czfvuzdlopph.us-east-1.rds.amazonaws.com/login/${email}`)
      if (response.data.length === 0) {
        const formData = new FormData();
        if (file) {
          for (let i = 0; i < file.length; i++) {
            formData.append("file", file[i]);
          }
        }
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("zipcode", zipcode)
        formData.append("email", email);
        formData.append("password", password);
        try {
          const response = await axios.post("rds-postgres-blueocean.czfvuzdlopph.us-east-1.rds.amazonaws.com/createprofile", formData);
          console.log(response)
          setSuccess(true);
          console.log('user created')
        } catch (err) {
          if (!err?.response) {
            setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
            setErrMsg('That username is taken');
          } else {
            setErrMsg('Registration failed please try again.')
          }
          errRef.current.focus();
        }
      } else {
        setErrMsg('That username is taken');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {success ? (
        <SignUpPageContainer>
          <SuccessHeader>Welcome aboard Matey!</SuccessHeader>
          <StyledImage src={Chest}></StyledImage>
          <Link to='/login'><Button>Return to Log In Page</Button></Link>
        </SignUpPageContainer>
      ) : (
        <SignUpPageContainer>
          <RegisterContainer>
            <P ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </P>
            <RegisterHeader>
              <WelcomeHeader>Welcome!</WelcomeHeader>
              <SignUpHeader>Sign-Up to continue</SignUpHeader>
            </RegisterHeader>
            <RegisterForm>
              <InputContainer>
                <Label>First Name</Label>
                <Input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>City</Label>
                <Input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>State</Label>
                <Input
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Zipcode</Label>
                <Input
                  type="text"
                  onChange={(e) => setZipcode(e.target.value)}
                  value={zipcode}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Email
                </Label>
                <Input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </InputContainer>
              <Div>
                <P id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "hide"}>
                  <InfoIcon src={Info}></InfoIcon> <br />
                  Must be a valid email
                </P>
              </Div>
              <InputContainer>
                <Label>Password
                  <Span className={validPassword ? "valid" : "hide"}>
                    <CheckMark src={Check}></CheckMark>
                  </Span>
                  <Span className={validPassword || !password ? "hide" : "invalid"}>
                    <XMark src={Xmark}></XMark>
                  </Span>
                </Label>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
              </InputContainer>
              <Div>
                <P id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "hide"}>
                  <InfoIcon src={Info}></InfoIcon> <br />
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </P>
              </Div>
              <InputContainer>
                <Label>Confirm PW
                  <Span className={validMatch && matchPassword ? "valid" : "hide"}>
                    <CheckMark src={Check}></CheckMark>
                  </Span>
                  <Span className={validMatch || !matchPassword ? "hide" : "invalid"}>
                    <XMark src={Xmark}></XMark>
                  </Span>
                </Label>
                <Input
                  type="password"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  value={matchPassword}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
              </InputContainer>
              <Div>
                <P id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hide"}>
                  <InfoIcon src={Info}></InfoIcon> <br />
                  Must match desired password above.
                </P>
              </Div>
              <InputContainer>
                <Label>Avatar</Label>
                <DropZone images={images} setImages={setImages} />
              </InputContainer>
              <ButtonContainer>
                <RegisterButton
                  disabled={!email || !validPassword || !validMatch || !firstName || !lastName || !city || !state || !zipcode || !images ? true : false}
                  onClick={(e) => {
                    e.preventDefault();
                    signUp(firstName, lastName, city, state, zipcode, email, password, images);
                    // console.log('success');
                  }}>Register</RegisterButton>
              </ButtonContainer>
              <RegisterFooter>
                <SignUpHeader>Already have an account? <Link to='/login'>Login</Link></SignUpHeader>
              </RegisterFooter>
            </RegisterForm>
          </RegisterContainer>
        </SignUpPageContainer>
      )}
    </>
  )
}

export default SignUpPage;

const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(13, 153, 255, .2);
  border-radius: 25px;
  border: solid;
  border-color: rgba(13, 153, 255, .5);
  width: 600px;
`

const RegisterHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const RegisterFooter = styled.div`
  display: flex;
  margin: 20px;
`

const WelcomeHeader = styled.h1`
`

const SignUpHeader = styled.h5`
  opacity: .7;
`

const RegisterForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Label = styled.label`
  display: flex;
  font-size: 25px;
  flex: .3;
  margin-left: 10px;
`
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
`

const DropZoneContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex: .7;
  justify-content: center;
  align-items: center;
  /* margin-left: -15px; */
`


const Input = styled.input`
  display: flex;
  height: 40px;
  /* width: 400px; */
  flex: .7;
  margin: 5px;
  margin-right: 25px;
  margin-bottom: 7px;
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
  border: none;
  border-radius: 5px;
  :focus-within{
      box-shadow: 0 0px 4px 4px #0D99FF;
      outline: 0;
  }
`

const SuccessHeader = styled.h1`
  color: #0D99FF;
`

const Button = styled.button`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 40px;
  width: 350px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  font-family: "Pacifico", cursive;
  font-size: 25px;
  border: transparent;
  background-color: white;
  border-radius: 999px;
  margin: 50px;
  :hover {
      background-color: #0D99FF;
      color: white;
      border-radius: 999px;
      cursor: pointer;
    }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const RegisterButton = styled.button`
  color: white;
  font-size: 15px;
  display: flex;
  width: 150px;
  height: 50px;
  background-color: #0D99FF;
  border-radius: 999px;
  border-color: transparent;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  :hover{
    cursor: pointer;
  }
`

const P = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 15px;
  width: 350px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-top: -5px;
`

const Span = styled.span`
`

const CheckMark = styled.img`
  height: 30px;
  margin-right: -5px;
`

const XMark = styled.img`
  height: 20px;
  margin-right: 3px;
`

const InfoIcon = styled.img`
  height: 20px;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const StyledImage = styled.img`
  margin-top: 40px;
  height: 300px;
  width: 300px;
`