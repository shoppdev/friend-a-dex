import React from 'react'

const Search = ({onSearch}) =>{
    return(
        <input type="search" placeholder="Who you lookn' for?" onChange={onSearch}/>
    )
}

export default Search