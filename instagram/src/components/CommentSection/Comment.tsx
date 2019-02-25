import React from "react"
import styled from "@emotion/styled"

export interface CommentProps {
  username: string
  text: string
}

const CommentList = styled.li`
  --font-size: 0.9rem;
  margin: 0.5rem 0;
  .comment-username {
    font-size: var(--font-size);
    margin-right: 1ch;
    display: inline;
  }
  .comment-text {
    font-size: var(--font-size);
    display: inline;
  }
`

const Comment = ({ username, text }: CommentProps) => (
  <CommentList>
    <h4 className="comment-username">{username}</h4>
    <p className="comment-text">{text}</p>
  </CommentList>
)

export default Comment
