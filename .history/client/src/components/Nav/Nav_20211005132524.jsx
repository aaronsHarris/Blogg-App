import { NavLink } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">  The Awesome Blogg</NavLink>
        <div className>
          <NavLink className="links" to="/">Posts</NavLink>
          <NavLink className="links" to="/posts">Create Post</NavLink>
        </div>
      </div>
    </nav>
  )
}
