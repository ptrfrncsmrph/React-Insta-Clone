import React, {
  useState,
  ChangeEvent,
  FormEventHandler,
  FormEvent
} from "react"
import Header from "./Header"

import "./Login.scss"

const LoginPage = ({
  handleAuthChange
}: {
  handleAuthChange: (e: FormEvent, username: string) => void
}) => {
  const [state, setState] = useState({ username: "", password: "" })
  const handleChange = ({
    target: { value, name }
  }: ChangeEvent<HTMLInputElement>) => {
    setState(state => ({
      ...state,
      [name]: value
    }))
  }
  return (
    <div className="container">
      {/* I would like to get rid of these, but TypeScript complains */}
      <Header query="" handleQueryChange={() => {}} />
      <main className="login">
        <form
          onSubmit={e => handleAuthChange(e, state.username)}
          className="login-form"
        >
          <label>
            Username
            <input
              type="text"
              value={state.username}
              name="username"
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={state.password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <button>Login</button>
        </form>
      </main>
    </div>
  )
}

export default LoginPage
