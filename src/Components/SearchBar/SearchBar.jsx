import React, { useState} from "react";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("")

    //search through props.games to get row whose name matches searchTerm
    const handleSearch = () => {
        props.setSearch(searchTerm)
    }

    return ( 
        <form onSubmit={handleSearch}>
            <textarea placeholder="Search for a game" onChange={(event) => setSearchTerm(event.target.value)}/>
            <button>Search</button>
        </form>
     );
}
 
export default SearchBar;