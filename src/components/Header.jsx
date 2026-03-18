import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

// Header with a mobile friendly hamburger bar using states.
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <Link to="/" className="logo">
          <div className="logo-svg"></div>
          <span>Björnsmide</span>
        </Link>
        <button className="nav-toggle-label" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
        </button>
        <ul>
          <li><Link to="/produkter">Produkter</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
          <li><Link to="/om-oss">Om oss</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
