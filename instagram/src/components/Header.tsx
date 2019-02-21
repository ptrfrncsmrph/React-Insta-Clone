import React, { ChangeEventHandler, MouseEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Search from "./Search"
import "./Header.scss"
import { Option, isSome } from "fp-ts/lib/Option"

interface HeaderProps {
  query: string
  handleQueryChange: ChangeEventHandler
  handleLogout: MouseEventHandler
  username: Option<string>
}

const Header = ({
  query,
  handleQueryChange,
  handleLogout,
  username
}: HeaderProps): JSX.Element => (
  <header className="top-header">
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
  </header>
)

export default Header
