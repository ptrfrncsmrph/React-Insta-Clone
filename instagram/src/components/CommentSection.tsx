import React from "react"

import Comment, { CommentProps } from "./Comment"
import "./CommentSection.scss"

const CommentSection = ({
  comments = []
}: {
  comments: ReadonlyArray<CommentProps>
}): JSX.Element => (
  <section className="comment-section">
    <ul>
      {comments.map((comment: CommentProps, i: number) => (
        <Comment key={i} {...comment} />
      ))}
    </ul>
  </section>
)

export default CommentSection
