import React from 'react'
import styled from 'styled-components';

function OnlineShoppingTips() {
  return (
    <div className='shoppingtips'>
      <TextContainer>
        <ShoppingTipsHeader>Best Practices for Buying & Selling Items Online</ShoppingTipsHeader>
        <ShoppingTipsOverview>
          The team at Treasure Bay values the lives and safety of all who use our site so we <br/>
          put together a few things you should keep in mind when buying & selling online.
        </ShoppingTipsOverview>
        <LineHeader>1. Never release personal information. </LineHeader>
        <LineBody>
          Scammers search sites like these looking to steal personal information such as social security <br/> 
          numbers, banking information, or your full home address. None of these are required to purchase <br/> 
          an item  so never give this information to anyone on this site. 
        </LineBody>
        <LineHeader>2. Meet in a well lit, public place.</LineHeader>
        <LineBody>
          As stated above, you should never give out your address and meet at a residence. It is much safer <br/>
          to meet at public place where there are many people around. Ensure that the area is highly visible <br/>
          and well lit. If is late then just wait until the next day where there is plenty of daylight. If possible, <br/>
          Treasure Bay recommends that you meet at a bank or police station.
        </LineBody>
        <LineHeader>3. If going alone, let a relative or friend know where you are going.</LineHeader>
        <LineBody>
          Always let someone know that you are going to meet someone to purchase an item. Tell them to <br/>
          check on you and to report to the police if they have not heard back from you.
        </LineBody>
      </TextContainer>

    </div>
  )
}

export default OnlineShoppingTips;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  width: 1000px;
`
const ShoppingTipsHeader = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`

const ShoppingTipsOverview = styled.h2`
  margin-bottom: 20px;
`

const LineHeader = styled.h2`
  font-size: 25px;
`

const LineBody = styled.h3`
  color: grey;
  /* text-shadow: 1px 1px 5px #0D99FF; */
  margin-bottom: 15px;
`