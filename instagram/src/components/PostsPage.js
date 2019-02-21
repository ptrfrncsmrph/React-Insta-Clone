import React, { Component, createContext } from "react"
import { modify, whereEq } from "partial.lenses"

import PostContainer from "./PostContainer"
import Header from "./Header"
import { posts as _posts } from "./../data/dummy-data"

import { uidFromUrl, append, toRegExp } from "../lib"
import { some } from "fp-ts/lib/Option"
import "./PostsPage.scss"

const { Provider, Consumer } = createContext()
export { Consumer }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      query: "",
      username: props.username
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
    const { query, posts, username } = this.state
    return (
      <div className="container">
        <Header
          username={some(username)}
          query={query}
          handleLogout={this.props.handleLogout}
          handleQueryChange={this.handleQueryChange}
        />
        <main>
          <Provider value={{ updateComments: this.updateComments }}>
            <ul className="posts-list">
              {posts
                .filter(post => toRegExp(query).test(post.username))
                .map(post => (
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
