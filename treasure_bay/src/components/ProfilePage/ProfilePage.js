import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserProvider'
import UserProducts from '../ProductItem/UserProducts';
import styled from 'styled-components';
// import Profile from './profile.css'

function ProfilePage() {
  const { user, setUser } = useContext(UserContext)


  return (
    
   

    <div className='profilepage'>

      
       <div className='profilecontainer'>

       {user && <img className='avatar' src={user[0].avatar}></img>}
       <div className='profileinfo'>
           
            <p className='name'>{user[0].first_name+' '+user[0].last_name}</p>
            <p>{user[0].zipcode}</p>
            <p>{user[0].city}</p>
            <p>{user[0].state}</p>
       </div>   
       </div>
            <h2  className='title'>Items for sell</h2>
            <UProductContainer>
            <UserProducts id={user[0].user_id}/>
            
            </UProductContainer>
                   
    </div>
  )
}

export default ProfilePage;

const UProductContainer = styled.div``