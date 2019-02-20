import React, { Component, ComponentType } from "react"

const withAuth = (App: ComponentType) =>
  class extends Component {
    render() {
      return <App />
    }
  }

export default withAuth
