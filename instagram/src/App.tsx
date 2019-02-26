import withAuth from "./authentication/withAuth"
import PostsPage from "./components/PostsPage"
import LoginPage from "./components/LoginPage"
import "./App.scss"

export default withAuth(LoginPage)(PostsPage)
