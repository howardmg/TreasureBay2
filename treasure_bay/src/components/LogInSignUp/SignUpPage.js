import { React, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import styled from 'styled-components';

// password requires at least one lowercase letter, one uppercase letter, one digit
// and one special character and it can be anywhere from 8-24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUpPage() {

  //hooks
  // const { user, setUser } = useContext(UserContext);
  const { success, setSuccess } = useState(true);
  const { firstName, setFirstName } = useState('');
  const { lastName, setLastName } = useState('');
  const { zipCode, setZipCode } = useState('');
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');



  return (
    <>
      {success ? (
        <SignUpPageContainer>
          <SuccessHeader>Welcome aboard Matey!</SuccessHeader>
          <Link to='/login'><Button>Return to Log In Page</Button></Link>
        </SignUpPageContainer>
      ) :
        <SignUpPageContainer>
          <RegisterContainer>
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
                <Label>Zip Code</Label>
                <Input
                  type="text"
                  onChange={(e) => setZipCode(e.target.value)}
                  value={zipCode}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Email</Label>
                <Input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Password</Label>
                <Input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Confirm Password</Label>
                <Input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </InputContainer>
              <ButtonContainer>
                <RegisterButton >Register</RegisterButton>
              </ButtonContainer>
              <RegisterFooter>
                <SignUpHeader>Already have an account? <Link to='/login'>Login</Link></SignUpHeader>
              </RegisterFooter>
            </RegisterForm>
          </RegisterContainer>
        </SignUpPageContainer>
      }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Label = styled.label`
  display: flex;
  font-size: 25px;
  width: 30%;
`
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const Input = styled.input`
  display: flex;
  height: 40px;
  width: 400px;
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
`