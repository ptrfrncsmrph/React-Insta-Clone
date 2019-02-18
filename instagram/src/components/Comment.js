import React from "react"
import PropTypes from "prop-types"

const Comment = ({ username, text }) => (
  <li className="comment">
    <h4>{username}</h4>
    <p>{text}</p>
  </li>
)

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
