import React from "react"
import PropTypes from "prop-types"

import "./Comment.scss"

const Comment = ({ username, text }) => (
  <li className="comment">
    <h4 class="comment-username">{username}</h4>
    <p class="comment-text">{text}</p>
  </li>
)

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
