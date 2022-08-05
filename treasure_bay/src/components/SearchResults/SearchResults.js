import { React, useContext, useState, useEffect, useRef } from 'react';
import SearchContext from '../../context/SearchProvider';
import ProductMainCards from '../ProductItem/ProductMainCards';
import styled from 'styled-components'
import axios from 'axios';

const SearchResults = () => {

    const [products, setProducts] = useState([])
    //search context
    const { search, setSearch } = useContext(SearchContext);
    console.log(search)

    useEffect(() => {
        getProducts()
    }, [search])

    async function getProducts() {
        try {
            const response = await axios.get(`http://localhost:3025/search/${search}`)
            //   .then((response) => response.json())
            setProducts(response.data)

        } catch (error) {
            console.log(error.message)
        }

    }

    if (!products) {
        return (
            <>
                <h1>loading</h1>
            </>
        )
    } else {
        return (
            <ProductPage>
                <ProductContainer>
                    {products.map((product) =>
                    (

                        <ProductMainCards
                            product_name={product.name}
                            price={product.price}
                            avatar={product.avatar}
                            image_url={product.image_url}
                            fname={product.first_name}
                            lname={product.last_name}
                            id={product.product_id} />

                    )
                    )}

                </ProductContainer>
            </ProductPage>
        );
    }
}

export default SearchResults;

const ProductContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 1500px;
justify-content: center;
/* align-content: center; */
margin-bottom: 30px;
`

const ProductPage = styled.div`
    display: flex;
    justify-content: center;
`