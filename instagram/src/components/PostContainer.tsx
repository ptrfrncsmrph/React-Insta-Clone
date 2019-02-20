import React from "react"
import Post, { PostProps } from "./Post"
import CommentSection from "./CommentSection"
import { CommentProps } from "./Comment"

import "./PostContainer.scss"

interface PostContainerProps extends PostProps {
  comments: Array<CommentProps>
}

const PostContainer = ({
  comments,
  imageUrl,
  likes,
  thumbnailUrl,
  timestamp,
  username,
  id
}: PostContainerProps) => (
  <li className="post-container">
    <article>
      <Post {...{ id, imageUrl, likes, thumbnailUrl, timestamp, username }} />
      <CommentSection id={id} comments={comments} />
    </article>
  </li>
)

export default PostContainer
