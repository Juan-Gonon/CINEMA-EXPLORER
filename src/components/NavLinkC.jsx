import { NavLink } from 'react-router-dom'

export const NavLinkC = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-white border-b-2 border-primary pb-1'
          : 'text-text-muted hover:text-white transition-colors'
      }>
      {text}
    </NavLink>
  )
}
