import { React, useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import axios, { AxiosError } from 'axios';
import "./SearchBar.css"
import SearchContext from '../../context/SearchProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Search() {
     const navigate = useNavigate();

     //hooks
     const [productNames, setProductNames] = useState([]);
     const [inputVal, setInputVal] = useState('');
     const [filteredData, setFilteredData] = useState([]);
     //search context
     const { search, setSearch } = useContext(SearchContext);




     const handleChange = (e) => {
          e.preventDefault()
          setInputVal(e.target.value);
          console.log(e.target.value);
          // setSearch(inputVal);

     }

     const handleClick = (e) => {
          setSearch(inputVal);
          setInputVal('')
          navigate('/searchresults')
     }




     return (

          <Form onSubmit={(handleChange)}>
               <SearchBar
                    type='text'
                    placeholder='Search for items'
                    onChange={handleChange}
                    value={inputVal}
               // onChange={}
               >
               </SearchBar>
               <Button type='submit' onClick={handleClick}></Button>
          </Form >
     )
}



export default Search;

const SearchBar = styled.input`
     width: 100%;
     height: 30px;
     border-radius: 999px;
     border-color: #0D99FF;
     border: 3px solid #0D99FF;
     color: #0D99FF;
     font-size: 17px;
     font-family: 'Kanit', sans-serif;
     padding-left: 10px;
     :focus-within{
          box-shadow: 0 0px 3px 1px #0D99FF;
          outline: 0;
     }
`

const Form = styled.form`
     display: flex;
     flex-direction: row;
     flex: .8;
`

const Button = styled.input`
     visibility: hidden;
`