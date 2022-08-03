import React from "react";

function SearchBar({search, setSearch}) {

  return (
    <div className="search">
      <input type="text" placeholder="Search for your favorite team here!" className="searchTerm" value={search} onChange={(e) => setSearch(e.target.value)}/>
      
      
    </div>
  );
}

export default SearchBar;