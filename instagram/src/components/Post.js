import React from "react"
import PropTypes from "prop-types"
import Heart from "react-feather/dist/icons/heart"
// import

import "./Post.scss"

const Post = ({ imageUrl, thumbnailUrl, username }) => (
  <>
    <header className="post-header">
      <img alt={username} src={thumbnailUrl} className="thumbnail" />
      <h3 className="author">{username}</h3>
    </header>
    <figure className="post">
      <img alt="Post" src={imageUrl} />
    </figure>
    <Heart size="2rem" />
  </>
)

Post.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Post
