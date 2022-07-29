import { React, useContext, useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../context/UserProvider';

function LogInPage() {


  //hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logIn = async (e) => {
    // console.log(email, password)
    e.preventDefault();
    const data = {
      username: email,
      password: password,
    }
    console.log(data)
    try {
      let returnedData = await axios.post("http://localhost:3025/login/", data);
      console.log(returnedData)
      if (!returnedData.data.email) {
        alert("Invalid login. Please check your username or password.")
      } else {
        localStorage.setItem(
          "currentUser",
          JSON.stringify([returnedData.data])
        );
        setUser([returnedData.data]);
        navigate('/');
      }
    } catch (error) {
      if (error) {
        alert("User does not exist. Please create an account")
        console.error(error);
        return undefined;
      }
    }
  }




  return (
    <WelcomePageContainer>
      <LogInContainer>
        <WelcomeHeader>Welcome Back!</WelcomeHeader>
        <LogInHeader>Login to continue</LogInHeader>
        <LogInForm onSubmit={logIn}>
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </InputContainer>
          <ButtonContainer>
            <LoginButton type='submit'>Login</LoginButton>
          </ButtonContainer>
          <LoginFooter>
            <LogInHeader>Don't have an account? <Link to='/signup'>Sign-Up</Link></LogInHeader>
          </LoginFooter>
        </LogInForm>
      </LogInContainer>
    </WelcomePageContainer>
  )
}

export default LogInPage;

const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`
const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(13, 153, 255, .2);
  border-radius: 25px;
  border: solid;
  border-color: rgba(13, 153, 255, .5);
`

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  display: flex;
  margin-left: 10px;
  font-size: 25px;
  width: 30%;
`

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


const WelcomeHeader = styled.h1`
  margin-top: 25px;
`

const LogInHeader = styled.h5`
  opacity: .7;
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const LoginButton = styled.button`
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

const LoginFooter = styled.div`
  display: flex;
  margin: 20px;
`