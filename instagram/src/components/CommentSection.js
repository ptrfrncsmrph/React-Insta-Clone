import React from "react"
import PropTypes from "prop-types"

import Comment from "./Comment"

const CommentSection = ({ comments = [] }) => (
  <section className="comment-section">
    <ul>
      {comments.map((comment, i) => (
        <Comment key={i} {...comment} />
      ))}
    </ul>
  </section>
)

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  )
}

export default CommentSection
