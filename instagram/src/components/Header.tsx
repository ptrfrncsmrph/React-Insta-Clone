import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Search from "./Search"
import "./Header.scss"

const Header = (): JSX.Element => (
  <header className="top-header">
    <div className="left">
      <FontAwesomeIcon size={"2x"} icon={faInstagram} />
      <h1>Instagram</h1>
    </div>
    <div className="center">
      <Search query={"test"} />
    </div>
    <div className="right">
      <nav>
        <a href="">a</a>
        <a href="">b</a>
        <a href="">c</a>
      </nav>
    </div>
  </header>
)

export default Header
