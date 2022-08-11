import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductMainCards from "./ProductMainCards";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Products are loading");

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch("https://rds-postgres-blueocean.czfvuzdlopph.us-east-1.rds.amazonaws.com/all")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <div>
          <h1>{loadingMessage}</h1>
        </div>
      ) : (
        <ProductContainer className="productitempage">
          {products.map((data) => (
            <ProductMainCards
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
        </ProductContainer>
      )}
    </>
  );
}

export default ProductPage;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  justify-content: center;
  /* height: 100vh; */
  margin-bottom: 30px;
`;
