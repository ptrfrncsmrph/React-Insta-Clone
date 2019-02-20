import React, { useState, MouseEventHandler } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"
import { inc, dec } from "./../lib"

import "./Post.scss"

export interface PostProps {
  imageUrl: string
  thumbnailUrl: string
  username: string
  likes: number
  timestamp: string
  id: string
  handleLike: (id: string, fn: (n: number) => number) => MouseEventHandler
}

const Post = ({
  imageUrl,
  thumbnailUrl,
  username,
  likes,
  handleLike,
  id
}: PostProps) => {
  const [liked, setLiked] = useState(false)
  return (
    <>
      <header className="post-header">
        <img alt={username} src={thumbnailUrl} className="thumbnail" />
        <h3 className="author">{username}</h3>
      </header>
      <figure className="post">
        <img alt="Post" src={imageUrl} />
      </figure>
      <div className="stats">
        <div className="icons">
          <button
            onClick={_ => {
              handleLike(id, liked ? dec : inc)
              setLiked(!liked)
            }}
          >
            <FontAwesomeIcon color={liked ? "red" : "inherit"} icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faComment} />
          </button>
        </div>
        <div className="likes">{likes} likes</div>
      </div>
    </>
  )
}

export default Post
