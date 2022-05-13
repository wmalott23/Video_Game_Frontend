import React, { useState} from "react";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("")

    //search through props.games to get row whose name matches searchTerm
    const handleSearch = (e) => {
        e.preventDefault()
        props.setSearch(searchTerm)
    }

    return ( 
        <form onSubmit={handleSearch}>
            <input value={searchTerm} type="text" placeholder="Search for a game" onChange={(event) => setSearchTerm(event.target.value)}/>
            <button>Search</button>
        </form>
     );
}
 
export default SearchBar;