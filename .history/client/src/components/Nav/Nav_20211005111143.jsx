import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <NavLink className="logo" to="/">
      The Awesome Blogg
      </NavLink>
   </nav>
  )
}
