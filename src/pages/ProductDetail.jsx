import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import FeaturedProducts from '../components/FeaturedProducts'
import broImg from '../bilder/bro.jpg'
import '../styles/product-detail.css'

function ProductDetail() {
  return (
    <>
      <Breadcrumb crumbs={[
        { label: 'Produkter', link: '/produkter' },
        { label: 'Servettställ - Högakustenbron' }
      ]} />

      <section className="product-detail">
        <div className="product-image-wrapper">
          <img
            src={broImg}
            alt="Servettställ inspirerat av Högakustenbron - handsmitt järn"
          />
        </div>

        <div className="product-info">
          <h1>Servettställ - Högakustenbron</h1>
          <p className="product-price">300,00kr</p>

          <div className="product-description">
            <p>
              Servettställ format som Högakustenbron. Handsmitt i järn och
              svartmålat. Brons form passar bra för att hålla servetter på plats,
              och det blir alltid en snackis vid matbordet.
            </p>
          </div>

          <div className="product-features">
            <h3>Produktdetaljer</h3>
            <ul>
              <li>Material: Handsmitt järn</li>
              <li>Mått: Ca 24 x 8 x 12 cm</li>
              <li>Finish: Svartmålad med matt yta</li>
              <li>Rymmer: Standardservetter</li>
              <li>Handgjord med omsorg i Härnösand</li>
              <li>Varje produkt är unik med små variationer</li>
            </ul>
          </div>

          <div className="product-buttons">
            <Link to="/kontakt" className="main-btn">Kontakta oss för beställning</Link>
            <Link to="/produkter" className="outline-btn">Tillbaka till produkter</Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <FeaturedProducts />
    </>
  )
}

export default ProductDetail
