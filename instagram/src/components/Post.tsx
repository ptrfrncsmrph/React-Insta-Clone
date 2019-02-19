import React from "react"

import "./Post.scss"

interface PostProps {
  imageUrl: string
  thumbnailUrl: string
  username: string
  likes: number
}

const Post = ({ imageUrl, thumbnailUrl, username, likes }: PostProps) => (
  <>
    <header className="post-header">
      <img alt={username} src={thumbnailUrl} className="thumbnail" />
      <h3 className="author">{username}</h3>
    </header>
    <figure className="post">
      <img alt="Post" src={imageUrl} />
    </figure>
    <div className="stats">
      <div className="icons" />
      <div className="likes">{likes} likes</div>
    </div>
  </>
)

export default Post
