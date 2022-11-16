import React from 'react';
import "../components/UserPage.css";


const SearchBox = (props) => {
    return (
        <div>
            <input value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder='Search'>
            </input>
        </div>
    )
}

export default SearchBox;