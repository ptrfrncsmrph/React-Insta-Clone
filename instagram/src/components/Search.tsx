import React from "react"

import "./Search.scss"

interface SearchProps {
  query: string
}

const Search = ({ query }: SearchProps) => (
  <span className="search-wrapper">
    <input className="search-input" type="text" />
    <span className="search-placeholder">Search</span>
  </span>
)

export default Search
