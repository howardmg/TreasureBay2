import { React, useContext, useState, useEffect, useRef } from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import UserContext from '../../context/UserProvider'

function HomePage() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  return (
    <div className='homepage'>
      Home Page

    </div>
  )
}

export default HomePage