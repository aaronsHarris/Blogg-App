import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <div>
      <NavLink className="logo" to="/">  The Awesome Blogg</NavLink>
        <NavLink className="link" to="/">Posts</NavLink>
        <NavLink className="link" to="/posts">Create Post</NavLink>
      </div>
    </nav>
  )
}
