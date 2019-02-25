import React, { createRef, Ref, RefObject } from "react"

import { Consumer } from "../PostsPage"
import Comment, { CommentProps } from "./Comment"

import styled from "@emotion/styled"
import { lighten } from "polished"

const papayawhip = "#ffefd5"

const Section = styled.section`
  padding: 0 1rem 1rem 1rem;
  input.comment {
    background: ${lighten(0.5, papayawhip)};
    font-size: 0.9rem;
    padding: 0.25rem;
  }
`

interface CommentSectionProps {
  comments: ReadonlyArray<CommentProps>
  id: string
  forwardedRef: RefObject<HTMLInputElement>
}

const CommentSection = ({
  comments,
  id,
  forwardedRef
}: CommentSectionProps): JSX.Element => (
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
            updateComments(id, forwardedRef!.current!.value)
            forwardedRef!.current!.value = ""
          }}
        >
          <input
            className="comment"
            placeholder="Add a new comment..."
            type="text"
            ref={forwardedRef}
          />
        </form>
      )}
    </Consumer>
  </Section>
)

export default CommentSection
