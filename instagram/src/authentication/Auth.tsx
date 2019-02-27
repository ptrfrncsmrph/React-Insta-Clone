import React, { Component, FormEvent, MouseEventHandler } from "react"
import { Option, some, none, fromNullable } from "fp-ts/lib/Option"

export interface LoginPageProps {
  handleAuthChange: (e: FormEvent<Element>, username: string) => void
}

export interface PostsPageProps {
  handleLogout: MouseEventHandler
  username: string
}

interface InjectedAuthProps {
  username: Option<string>
  handleAuthChange: (e: FormEvent<any>, username: string) => void
  handleLogout: MouseEventHandler
}

interface AuthProps {
  children({
    username,
    handleAuthChange,
    handleLogout
  }: InjectedAuthProps): JSX.Element
}

interface AuthState {
  username: Option<string>
}

class Auth extends Component<AuthProps, AuthState> {
  state = {
    username: none
  }

  componentDidMount() {
    const username: Option<string> = fromNullable(
      localStorage.getItem("username")
    )
    this.setState(() => ({
      username
    }))
  }

  handleAuthChange = (e: FormEvent, username: string) => {
    e.preventDefault()
    this.setState(() => ({ username: some(username) }))
    localStorage.setItem("username", username)
  }

  handleLogout = () => {
    this.setState(() => ({
      username: none
    }))
    localStorage.removeItem("username")
  }

  render() {
    const { username } = this.state
    const { handleAuthChange, handleLogout } = this
    return this.props.children({ username, handleAuthChange, handleLogout })
  }
}

export default Auth
