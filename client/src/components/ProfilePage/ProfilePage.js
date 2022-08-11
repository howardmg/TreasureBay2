import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserContext from "../../context/UserProvider";
import ProductPage from "../ProductItem/ProductPage";
import Profile from "./profile.css";
import ProfileProductMainCards from "../ProductItem/ProfileProductMainCards";

function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const [userproduct, setUserProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("");

 

  useEffect(() => {
    profileProducts();
  }, [user]);

  async function profileProducts() {
    setLoadingMessage("Products are loading");

  await fetch(`http://localhost:3025/profileproducts/${user[0].user_id}`)
      .then((response) => response.json())
      .then((data) => setUserProduct(data));
    setLoading(false);
  }
  console.log(userproduct);

  return (
    <>
      {!userproduct? (
        <div>
          <h1>loading</h1>
        </div>
      ) : (
        <>
          {user && (
            <div className="profilepage">
              <div className="profilecontainer">
                <img className="avatar" src={user[0].avatar}></img>
                <div className="profileinfo">
                  <p className="name">
                    {user[0].first_name + " " + user[0].last_name}
                  </p>
                  <p>{user[0].city}, {user[0].state} {user[0].zipcode}</p>
                  {/* <p>{user[0].state}</p> */}
                  {/* <p>{user[0].zipcode}</p> */}
                </div>
              </div>
              <div className="title">
                <h2>Item You Have Posted For Sale</h2>
              </div>
              <div className="ppcontainer">
                {userproduct.map((data) => (
                  <ProfileProductMainCards
                    id={data.product_id}
                    product_name={data.name}
                    price={data.price}
                    description={data.description}
                    details={data.details}
                    image_url={data.image_url}
                    avatar={data.avatar}
                    fname={data.first_name}
                    lname={data.last_name}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProfilePage;
