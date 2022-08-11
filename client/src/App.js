import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './components/Footer/AboutPage';
import Footer from './components/Footer/Footer';
import OnlineShoppingTips from './components/Footer/OnlineShoppingTips';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import MessagingPage from './components/MessagingPage/MessagingPage';
import PostItemPage from './components/ProductItem/PostItemPage';
import ProductItem from './components/ProductItem/ProductItem';
import ProductPage from './components/ProductItem/ProductPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoadingContext from './context/LoadingProvider';
import UserContext from './context/UserProvider';
import SearchResults from './components/SearchResults/SearchResults';
import UpdateProduct from './components/ProductItem/UpdateProduct';



function App() {
  const { user, setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [userproduct, setUserProduct] = useState([]);
  //test deploy

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser !== null) {
      setUser(JSON.parse(currentUser));
    }

  }, [])





  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/profile' element={<ProfilePage userproduct={userproduct} />} />
        <Route path='/productitem' element={<ProductItem />} />
        <Route path='/updateproduct' element={<UpdateProduct />} />
        <Route path='/postanitem' element={<PostItemPage />} />
        <Route path='/messages' element={<MessagingPage />} />
        <Route path='/onlineshoppingtips' element={<OnlineShoppingTips />} />
        <Route path='/searchresults' element={<SearchResults />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
