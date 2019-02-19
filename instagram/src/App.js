import React, { Component } from "react"

import PostContainer from "./components/PostContainer"
import { posts } from "./data/dummy-data"

import "./App.scss"

import Header from "./components/Header"

class App extends Component {
  state = {
    posts
  }

  render() {
    const { posts } = this.state
    return (
      <div className="container">
        <Header />
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
