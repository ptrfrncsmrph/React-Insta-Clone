import React, { ChangeEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import styled from "@emotion/styled"

interface SearchProps {
  query: string
  handleQueryChange: ChangeEventHandler
}

const SearchWrapper = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-input {
    width: 20rem;
    padding: 0.25rem;
  }
  .search-input:focus ~ .search-placeholder {
    display: none;
  }
  .search-placeholder {
    pointer-events: none;
    position: absolute;
    color: gray;
    font-size: 0.9rem;
  }
`

const Search = ({ query, handleQueryChange }: SearchProps) => (
  <SearchWrapper>
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
  </SearchWrapper>
)

export default Search
