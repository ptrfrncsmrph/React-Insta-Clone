import React, { useState } from "react"
import withAuth from "./authentication/withAuth"
import PostsPage from "./components/PostsPage"
import LoginPage from "./components/LoginPage"
import "./App.scss"

const App = () => {
  const [isAuthed, setAuth] = useState(false)
  const handleAuthChange = () => console.log("HELLO")
  return isAuthed ? (
    <PostsPage />
  ) : (
    <LoginPage handleAuthChange={handleAuthChange} />
  )
}

export default withAuth(App)
