import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

function Navbar() {
  const {user, logout} = useContext(UserContext);

  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/hooks">Hooks</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/performance">Performance</NavLink>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
    </nav>
  )
}

export default Navbar