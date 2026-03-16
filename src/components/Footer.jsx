import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {

  return (
    <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h4>Information</h4>
                <ul>
                    <li><Link to="/">Hem</Link></li>
                    <li><Link to="/produkter">Produkter</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="/om-oss">Om oss</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Kontakt</h4>
                <p>Email: info@bjornsmide.se</p>
                <p>Tel: 070-348 92 15</p>
                <p>Adress: Maratongatan 16, 871 51 Härnösand</p>
            </div>
            <Link to="/" className="footer-logo">
                <div className="footer-logo-svg"></div>
            </Link>
        </div>
        <div className="footer-bottom">
            <span>© 2026 Björnsmide</span>
            <span>|</span>
            <Link to="/integritetspolicy">Integritetspolicy</Link>
            <span>|</span>
            <Link to="/cookies">Cookies</Link>
            <span>|</span>
            <Link to="/kopvillkor">Köpvillkor</Link>
        </div>
	</footer>
  )
}

export default Footer
