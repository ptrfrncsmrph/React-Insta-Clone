import React, { Component, createContext } from "react"

import PostContainer from "./components/PostContainer"
import Header from "./components/Header"
import { posts as _posts } from "./data/dummy-data"

import "./App.scss"
import { uidFromUrl } from "./lib"

const { Provider, Consumer } = createContext()
export { Consumer }

const posts = _posts.map(post => ({ ...post, id: uidFromUrl(post.imageUrl) }))

class App extends Component {
  state = {
    posts
  }

  updateComments = (id, newComment) => {
    this.setState(({ posts }) => ({
      posts: posts.map(post =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  username: "foo",
                  text: newComment
                }
              ]
            }
          : post
      )
    }))
  }

  render() {
    const { posts } = this.state
    return (
      <div className="container">
        <Header />
        <main>
          <Provider value={{ updateComments: this.updateComments }}>
            <ul className="posts-list">
              {posts.map(post => (
                <PostContainer key={post.id} {...post} />
              ))}
            </ul>
          </Provider>
        </main>
      </div>
    )
  }
}

export default App
