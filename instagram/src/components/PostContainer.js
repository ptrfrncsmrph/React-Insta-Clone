import React from "react"
import Post from "./Post"
import CommentSection from "./CommentSection"

import "./PostContainer.scss"

const PostContainer = ({
  comments,
  imageUrl,
  likes,
  thumbnailUrl,
  timestamp,
  username
}) => (
  <li className="post-container">
    <article>
      <Post {...{ imageUrl, likes, thumbnailUrl, timestamp, username }} />
      <CommentSection comments={comments} />
    </article>
  </li>
)

export default PostContainer
