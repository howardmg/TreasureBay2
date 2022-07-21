import React from 'react';
import styled from 'styled-components';
import TreasureBay from './images/treasure.jpg' 
import UserAvatar from './images/user.jpg'
import Message from './images/message.png'
import Search from './SearchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
          <Link to='/'>
               <HeaderLogoContainer>
                    <TreasureBayLogo src={TreasureBay}/>
                    <HeaderTitle>Treasure Bay</HeaderTitle>
               </HeaderLogoContainer>
          </Link>

          <SearchBarContainer>
               <Search />
          </SearchBarContainer>
          <HeaderOptionsContainer>
               <Link to='/messages'><MessageIcon src={Message}></MessageIcon></Link>
               <Link to='/profile'><Avatar src={UserAvatar}></Avatar></Link>
          </HeaderOptionsContainer>
          
    </div>
  )
}

export default Header;

const HeaderTitle = styled.h3`
     font-size: 22px;
     color: #0D99FF;
     :hover{
          transform: scale(1.1);
     }
`

const HeaderLogoContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-left: 10px;
     :hover{
          cursor: pointer;
     }
`
const TreasureBayLogo = styled.img`
     height:60px;
     
`

const SearchBarContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`

const HeaderOptionsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-right: 10px;
`

const Avatar = styled.img`
     height: 50px;
     border-radius: 999px;
     :hover{
          transform: scale(1.1);
     }
`

const MessageIcon = styled.img`
     height: 40px;
     :hover{
          transform: scale(1.1);
     }
`

const StyledLink = styled(Link)`
    color: white;
    position: relative;
    margin-top: 15px;
    cursor: pointer;
    :hover {
        color: #FF0000;
        cursor: pointer;
    }
`