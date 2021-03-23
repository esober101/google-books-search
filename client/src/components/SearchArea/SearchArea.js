import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook } action="">
                <input onChange={props.handleSearch} type="text"placeholder="Just After Sunset"/>
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )
}

export default SearchArea;