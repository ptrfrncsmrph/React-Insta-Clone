import React, { useState, FormEvent } from "react"
import withAuth from "./authentication/withAuth"
import PostsPage from "./components/PostsPage"
import LoginPage from "./components/LoginPage"
import "./App.scss"

import { Option, some, none, fromNullable } from "fp-ts/lib/Option"

const App = () => {
  const _user: Option<string> = fromNullable(localStorage.getItem("user"))
  const [user, setUser] = useState(_user)
  const handleAuthChange = (e: FormEvent, username: string) => {
    e.preventDefault()
    setUser(some(username))
    localStorage.setItem("user", username)
  }
  return user.fold(
    <LoginPage handleAuthChange={handleAuthChange} />,
    username => <PostsPage username={username} />
  )
}

export default withAuth(App)
