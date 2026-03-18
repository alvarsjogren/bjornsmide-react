import { Link } from 'react-router-dom'
import '../styles/breadcrumb.css'

// Uses a list of breadcrumbs where "Hem" is always shown first
// Takes the current sites label as a prop.
function Breadcrumb({ crumbs }) {
  return (
    <nav className="breadcrumb">
      <ol>
        <li><Link to="/">Hem</Link></li>
        {crumbs.map((crumb) => {
          if (crumb.link) {
            return (
              <li key={crumb.label}>
                <Link to={crumb.link}>{crumb.label}</Link>
              </li>
            )
          }

          return (
            <li key={crumb.label} aria-current="page">
              {crumb.label}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
