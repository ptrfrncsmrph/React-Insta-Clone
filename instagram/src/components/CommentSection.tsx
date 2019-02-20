import React, { createRef } from "react"

import { Consumer } from "./../App"
import Comment, { CommentProps } from "./Comment"
import "./CommentSection.scss"
import { toRegExp } from "../lib"

interface CommentSectionProps {
  comments: ReadonlyArray<CommentProps>
  id: string
}

toRegExp

const CommentSection = ({ comments, id }: CommentSectionProps): JSX.Element => {
  const ref = createRef<HTMLInputElement>()
  return (
    <section className="comment-section">
      <ul>
        {comments.map((comment: CommentProps, i: number) => (
          <Comment key={i} {...comment} />
        ))}
      </ul>
      <Consumer>
        {({
          updateComments
        }: {
          updateComments: (a: string, b: string) => void
        }) => (
          <form
            onSubmit={e => {
              e.preventDefault()
              updateComments(id, ref!.current!.value)
              ref!.current!.value = ""
            }}
          >
            <input type="text" ref={ref} />
          </form>
        )}
      </Consumer>
    </section>
  )
}

export default CommentSection
