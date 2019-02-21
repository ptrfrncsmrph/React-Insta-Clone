import React, { RefObject } from "react"

import { Consumer } from "../PostsPage"
import Comment, { CommentProps } from "./Comment"

import styled from "@emotion/styled"
import { lighten } from "polished"

const papayawhip = "#ffefd5"

const Section = styled.section`
  padding: 0 1rem 1rem 1rem;
  input.comment {
    background: ${lighten(0.1, papayawhip)};
    font-size: 0.9rem;
    padding: 0.25rem;
  }
`

interface CommentSectionProps {
  comments: ReadonlyArray<CommentProps>
  id: string
  ref: RefObject<HTMLInputElement>
}

const CommentSection = ({
  comments,
  id,
  ref
}: CommentSectionProps): JSX.Element => {
  return (
    <Section>
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
            <input
              className="comment"
              placeholder="Add a new comment..."
              type="text"
              ref={ref}
            />
          </form>
        )}
      </Consumer>
    </Section>
  )
}

export default CommentSection
