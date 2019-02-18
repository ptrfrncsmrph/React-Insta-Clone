import React, { Component } from "react"

import PostContainer from "./components/PostContainer"
import { posts } from "./data/dummy-data"

class App extends Component {
  state = {
    posts
  }

  render() {
    const { posts } = this.state
    return (
      <>
        <header>
          <h1>Instagram</h1>
        </header>
        <main>
          {posts.map(post => (
            <PostContainer {...post} />
          ))}
        </main>
      </>
    )
  }
}

export default App
