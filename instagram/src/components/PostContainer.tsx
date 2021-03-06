import React, { createRef } from "react"
import Post, { PostProps } from "./Post"
import CommentSection from "./CommentSection/CommentSection"
import { CommentProps } from "./CommentSection/Comment"

import "./PostContainer.scss"

interface PostContainerProps extends PostProps {
  comments: Array<CommentProps>
  id: string
}

const PostContainer = ({
  comments,
  imageUrl,
  likes,
  thumbnailUrl,
  timestamp,
  username,
  id,
  handleLike
}: PostContainerProps) => {
  const ref = createRef<HTMLInputElement>()
  const handleFocus = () => {
    ref!.current!.focus()
  }
  return (
    <li className="post-container">
      <article>
        <Post
          {...{
            handleLike,
            id,
            imageUrl,
            likes,
            thumbnailUrl,
            timestamp,
            username,
            handleFocus
          }}
        />
        <CommentSection forwardedRef={ref} id={id} comments={comments} />
      </article>
    </li>
  )
}

export default PostContainer
