import React from 'react'
// searchBar for searching users, shown in Sidebar component
const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <div className="searchForm">
        <input type="text" placeholder='Find a User' onChange={(event)=>props.handleSearch(event.target.value)}/>
      </div>
    </div>
  )
}

export default SearchBar