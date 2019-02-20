import React, { ChangeEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import "./Search.scss"

interface SearchProps {
  query: string
  handleQueryChange: ChangeEventHandler
}

const Search = ({ query, handleQueryChange }: SearchProps) => (
  <span className="search-wrapper">
    <input
      value={query}
      onChange={handleQueryChange}
      className="search-input"
      type="text"
    />
    {query.length === 0 && (
      <span className="search-placeholder">
        <FontAwesomeIcon size={"sm"} icon={faSearch} /> Search
      </span>
    )}
  </span>
)

export default Search
