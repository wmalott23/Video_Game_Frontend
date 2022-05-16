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
            <input className="rounded" value={searchTerm} type="text" placeholder="Search for a game" onChange={(event) => setSearchTerm(event.target.value)}/>
            <button className="bg-primary text-white rounded">Search</button>
        </form>
     );
}
 
export default SearchBar;