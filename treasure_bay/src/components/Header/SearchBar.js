import React from 'react'
import styled from 'styled-components'

function Search() {
  return (
     <>
          <SearchBar 
               type='text'
               placeholder='Search for items'
          >
          </SearchBar>
     </>
  )
}

export default Search;

const SearchBar  = styled.input`
     width: 100%;
     height: 30px;
     border-radius: 999px;
     border-color: #0D99FF;
     border: solid 2.1px;
     color: #0D99FF;
     font-size: 17px;
     font-family: 'Kanit', sans-serif;
     :focus-within{
    box-shadow: 0 0px 3px 1px #0D99FF;
    outline: 0;
}
`