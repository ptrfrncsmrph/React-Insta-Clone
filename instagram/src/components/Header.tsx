import React, { ChangeEventHandler, MouseEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Search from "./Search"
import "./Header.scss"

interface HeaderProps {
  query: string
  handleQueryChange: ChangeEventHandler
  handleLogout: MouseEventHandler
}

const Header = ({
  query,
  handleQueryChange,
  handleLogout
}: HeaderProps): JSX.Element => (
  <header className="top-header">
    <div className="left">
      <FontAwesomeIcon size={"2x"} icon={faInstagram} />
      <h1>Instagram</h1>
    </div>
    <div className="center">
      <Search handleQueryChange={handleQueryChange} query={query} />
    </div>
    <div className="right">
      <nav>
        <button onClick={handleLogout}>Log Out</button>
        {/* <a href="">a</a>
        <a href="">b</a>
        <a href="">c</a> */}
      </nav>
    </div>
  </header>
)

export default Header
