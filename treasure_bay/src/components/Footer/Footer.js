import React from 'react'
import styled from 'styled-components'
import copyright from './images/copyright-symbol.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
     <CopyRightContainer>
          <CopyRight src={copyright} />
          <Header>Treasure Bay LLC.</Header>
     </CopyRightContainer>
     <ShoppingTipsContainer>
          <Link to='/about'><Header>About</Header></Link> |
          <Link to='/onlineshoppingtips'><Header>Online Shopping Safety Tips</Header></Link>
     </ShoppingTipsContainer>
     
    </div>
  )
}

export default Footer;

const Header = styled.h3`
     color: #0D99FF;
     font-size: 15px;
     margin-left: 10px;
     margin-right: 15px;
     :hover{
          cursor: pointer;
          transform: scale(1.09);
          color: #0D99FF;
     }
`
const CopyRight = styled.img`
     height: 15px;
     margin-left: 10px;
     margin-right: -10px;
`

const CopyRightContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-left: 5px;
`

const ShoppingTipsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     /* :hover{
          cursor: pointer;
          transform: scale(1.09);
          color: #0D99FF;
     } */
     a{
          text-decoration: none !important;
     }
     
`