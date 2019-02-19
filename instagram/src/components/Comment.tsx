import React from "react"
import "./Comment.scss"

export interface CommentProps {
  username: string
  text: string
}

const Comment = ({ username, text }: CommentProps) => (
  <li className="comment">
    <h4 className="comment-username">{username}</h4>
    <p className="comment-text">{text}</p>
  </li>
)

export default Comment
