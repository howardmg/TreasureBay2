import { React, useContext, useState, useEffect, useRef } from 'react';
import DropDown from './DropDown';
import styled from 'styled-components';
import TreasureBay from './images/treasure.jpg'
import UserAvatar from './images/user.jpg'
import UserContext from '../../context/UserProvider';
import Message from './images/message.png'
import Search from './SearchBar';
import AddIcon from './images/addicon.png'
import { Link } from 'react-router-dom';

function Header() {
     const { user, setUser } = useContext(UserContext)

     return (



          <div className='header'>


               {user ? (
                    <>
                         <Link to='/'>
                              <HeaderLogoContainer>
                                   <TreasureBayLogo src={TreasureBay} />
                                   <HeaderTitle>Treasure Bay</HeaderTitle>
                              </HeaderLogoContainer>
                         </Link>
                         <SearchBarContainer>
                              <Search />
                         </SearchBarContainer>
                         <HeaderOptionsContainer>
                              <Link to='/postanitem'><PostIcon src={AddIcon}></PostIcon></Link>
                              <Link to='/messages'><MessageIcon src={Message}></MessageIcon></Link>
                              {user && <DropDown></DropDown>}
                         </HeaderOptionsContainer>
                    </>
               ) : (
                    <>
                         <Link to='/'>
                              <HeaderLogoContainer>
                                   <TreasureBayLogo src={TreasureBay} />
                                   <HeaderTitle>Treasure Bay</HeaderTitle>
                              </HeaderLogoContainer>
                         </Link>
                         <SearchBarContainer>
                              <Search />
                         </SearchBarContainer>
                         <HeaderOptionsContainer>
                              <StyledLink to="/login">Login/Signup</StyledLink>
                         </HeaderOptionsContainer>
                    </>
               )}



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
     /* width: 100%; */
     flex: .2;
     :hover{
          cursor: pointer;
     }
`
const TreasureBayLogo = styled.img`
     height:60px !important;
     
`

const SearchBarContainer = styled.div`
     display: flex;
     flex: .5;
     justify-content: center;
     align-items: center;
     /* width: 40%; */
`

const HeaderOptionsContainer = styled.div`
     display: flex;
     justify-content: flex-end;
     align-items: center;
     margin-right: 10px;
     flex: .1;
`



const MessageIcon = styled.img`
     height: 40px;
     :hover{
          transform: scale(1.1);
     }
`
const PostIcon = styled.img`
     height: 30px;
     border-radius: 999px;
     margin-right: 15px;
     margin-top: 6px;
     :hover{
          transform: scale(1.1);
     }
`

const StyledLink = styled(Link)`
     color: rgba(13, 153, 255);
`
