import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navItems } from '../../router/routes.js'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const logoUrl = `${import.meta.env.BASE_URL}images/logo.svg`

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" onClick={closeMenu}>
          <img src={logoUrl} alt="F1 Knowledge Hub" />
        </Link>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`site-header__nav ${isOpen ? 'site-header__nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

