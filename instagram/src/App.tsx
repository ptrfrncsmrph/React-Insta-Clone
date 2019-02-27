import React from "react"
import Auth, { LoginPageProps, PostsPageProps } from "./authentication/Auth"
import PostsPage from "./components/PostsPage"
import LoginPage from "./components/LoginPage"
import "./App.scss"

const App = () => (
  <Auth>
    {({ username, handleAuthChange, handleLogout }) =>
      username.fold(
        <LoginPage handleAuthChange={handleAuthChange} />,
        username => (
          <PostsPage handleLogout={handleLogout} username={username} />
        )
      )
    }
  </Auth>
)

export default App
