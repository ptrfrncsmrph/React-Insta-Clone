import React, { Component } from "react"

import PostContainer from "./components/PostContainer"
import { posts } from "./data/dummy-data"
import logo from "../src/assets/logo.png"

import "./App.scss"

class App extends Component {
  state = {
    posts
  }

  render() {
    const { posts } = this.state
    return (
      <div className="container">
        <header>
          <img alt="logo" className="logo" src={logo} />
          <h1>Instagram</h1>
        </header>
        <main>
          <ul className="posts-list">
            {posts.map((post, i) => (
              <PostContainer key={i} {...post} />
            ))}
          </ul>
        </main>
      </div>
    )
  }
}

export default App
