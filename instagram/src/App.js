import React from "react"
import withAuth from "./authentication/withAuth"
import PostsPage from "./components/PostsPage"
import "./App.scss"

export default withAuth(PostsPage)
