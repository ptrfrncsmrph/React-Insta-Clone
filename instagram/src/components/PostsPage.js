import React, { Component, createContext } from "react"
import { modify, whereEq } from "partial.lenses"

import PostContainer from "./PostContainer"
import Header from "./Header"
import { posts as _posts } from "./../data/dummy-data"

import { uidFromUrl, append } from "../lib"

const { Provider, Consumer } = createContext()
export { Consumer }

class App extends Component {
  constructor({ username }) {
    super({ username })
    this.state = {
      posts: [],
      query: "",
      username
    }
  }

  componentDidMount() {
    const posts = _posts.map(post => ({
      ...post,
      id: uidFromUrl(post.imageUrl)
    }))
    this.setState(() => ({ posts }))
  }

  updateComments = (id, text) => {
    const { username } = this.state
    this.setState(
      modify([whereEq({ id }), "comments"], append({ username, text }))
    )
  }

  handleQueryChange = ({ target: { value: query } }) => {
    this.setState(() => ({ query }))
  }

  handleLike = (id, fn) => {
    this.setState(modify([whereEq({ id }), "likes"], fn))
  }

  render() {
    const { query, posts } = this.state
    return (
      <div className="container">
        <Header query={query} handleQueryChange={this.handleQueryChange} />
        <main>
          <Provider value={{ updateComments: this.updateComments }}>
            <ul className="posts-list">
              {posts.map(post => (
                <PostContainer
                  key={post.id}
                  handleLike={this.handleLike}
                  {...post}
                />
              ))}
            </ul>
          </Provider>
        </main>
      </div>
    )
  }
}

export default App
