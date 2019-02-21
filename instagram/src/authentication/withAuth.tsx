import React, {
  Component,
  ComponentType,
  FormEvent,
  MouseEventHandler
} from "react"
import { Option, some, none, fromNullable } from "fp-ts/lib/Option"

interface LoginPageProps {
  handleAuthChange: (e: FormEvent<Element>, username: string) => void
}

interface PostsPageProps {
  handleLogout: MouseEventHandler
  username: string
}

const withAuth = (LoginPage: ComponentType<LoginPageProps>) => (
  PostsPage: ComponentType<PostsPageProps>
) =>
  class extends Component {
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
      return this.state.username.fold(
        <LoginPage handleAuthChange={this.handleAuthChange} />,
        username => (
          <PostsPage handleLogout={this.handleLogout} username={username} />
        )
      )
    }
  }

export default withAuth
