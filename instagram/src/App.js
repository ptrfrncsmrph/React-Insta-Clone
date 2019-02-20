import React, { Component, createContext } from "react"
import { modify, whereEq } from "partial.lenses"

import PostContainer from "./components/PostContainer"
import Header from "./components/Header"
import { posts as _posts } from "./data/dummy-data"

import "./App.scss"
import { uidFromUrl, append, add } from "./lib"

const { Provider, Consumer } = createContext()
export { Consumer }

class App extends Component {
  state = {
    posts: [],
    query: ""
  }

  componentDidMount() {
    const posts = _posts.map(post => ({
      ...post,
      id: uidFromUrl(post.imageUrl)
    }))
    this.setState(() => ({ posts }))
  }

  updateComments = (id, newComment) => {
    this.setState(
      modify(
        [whereEq({ id }), "comments"],
        append({ username: "pete", text: newComment })
      )
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
