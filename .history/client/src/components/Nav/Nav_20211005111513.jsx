import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <NavLink className="logo" to="/">
        The Awesome Blogg
      </NavLink>
      <div>
        <NavLink className="link" to="/posts">
        Create Posts
        </NavLink>
        <NavLink className="link"to="/posts">
        Posts
        </NavLink>
      </div>
    </nav>
  )
}
