import React, { Component, createContext } from "react"
import { modify, whereEq } from "partial.lenses"

import PostContainer from "./PostContainer"
import Header from "./Header/Header"
import { posts as _posts } from "./../data/dummy-data"

import { uidFromUrl, append, toRegExp } from "../lib"
import { some } from "fp-ts/lib/Option"
import "./PostsPage.scss"

const { Provider, Consumer } = createContext()
export { Consumer }

class PostsPage extends Component {
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
    const { username, handleLogout } = this.props
    return (
      <div className="container">
        <Header
          username={some(username)}
          query={query}
          handleLogout={handleLogout}
          handleQueryChange={this.handleQueryChange}
        />
        <main>
          <Provider value={{ updateComments: this.updateComments }}>
            <ul className="posts-list">
              {posts
                .filter(({ username, imageUrl }) =>
                  [username, imageUrl].some(s => toRegExp(query).test(s))
                )
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

export default PostsPage
