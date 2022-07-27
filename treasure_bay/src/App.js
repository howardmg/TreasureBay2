import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import OnlineShoppingTips from './components/Footer/OnlineShoppingTips';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import MessagingPage from './components/MessagingPage/MessagingPage';
import PostItemPage from './components/ProductItem/PostItemPage';
import ProductPage from './components/ProductItem/ProductPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoadingContext from './context/LoadingProvider';
import UserContext from './context/UserProvider';


function App() {
  const { user, setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage setUser={setUser} />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/productitem' element={<ProductPage />} />
        <Route path='/postanitem' element={<PostItemPage />} />
        <Route path='/messages' element={<MessagingPage />} />
        <Route path='/onlineshoppingtips' element={<OnlineShoppingTips />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
