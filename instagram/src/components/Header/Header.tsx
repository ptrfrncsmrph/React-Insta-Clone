import React, { ChangeEventHandler, MouseEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Search from "./Search"
import { Option, isSome } from "fp-ts/lib/Option"
import styled from "@emotion/styled"

interface HeaderProps {
  query: string
  handleQueryChange: ChangeEventHandler
  handleLogout: MouseEventHandler
  username: Option<string>
}

const TopHeader = styled.header`
  background: #fffe;
  position: sticky;
  top: 0;
  padding: 1.2rem 0;
  display: flex;
  justify-content: space-between;
  div {
    align-items: center;
    display: flex;
  }
  h1 {
    margin: 0;
    &:before {
      margin: 0 0.5rem;
      border-left: 2px solid black;
      content: "";
    }
  }
  button {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid lightgray;
    border-radius: 2rem;
  }
`

const Header = ({
  query,
  handleQueryChange,
  handleLogout,
  username
}: HeaderProps): JSX.Element => (
  <TopHeader>
    <div className="left">
      <FontAwesomeIcon size={"2x"} icon={faInstagram} />
      <h1>Instagram</h1>
    </div>
    {isSome(username) && (
      <>
        <div className="center">
          <Search handleQueryChange={handleQueryChange} query={query} />
        </div>
        <div className="right">
          <nav>
            <button onClick={handleLogout}>Log Out</button>
          </nav>
        </div>
      </>
    )}
  </TopHeader>
)

export default Header
