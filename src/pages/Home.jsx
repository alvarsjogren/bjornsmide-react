import { Link } from 'react-router-dom'
import broImg from '../bilder/bro.jpg'
import slendaImg from '../bilder/slenda.jpg'
import adventstakeImg from '../bilder/adventstake3.jpg'
import '../styles/hero.css'
import '../styles/featured-products.css'
import '../styles/info.css'

function Home() {
  return (
    <>
      <section className="banner">
        <h1>Konstsmide i egen design</h1>
        <p>
          Från vinställ fromade som Högakusten-bron till handgjorda lampetter,
          ljuslyktor och servettställ - Vi förvandlar rått järn till funktionell
          konst.
        </p>
        <Link to="/produkter" className="main-btn">Våra produkter</Link>
      </section>

      <div className="divider"></div>

      <section className="featured-products">
        <h2>Utvalda Produkter</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src={broImg} alt="Servettställ - Högakustenbron" />
            <h3>Servettställ - Högakustenbron</h3>
            <p className="price">300,00kr</p>
            <Link to="/produkter/servettstall-hogakustenbron" className="product-button">
              Till produkten
            </Link>
          </div>
          <div className="product-card">
            <img src={slendaImg} alt="Ljuslykta Slända" />
            <h3>Ljuslykta - Sländan</h3>
            <p className="price">300,00kr</p>
            <Link to="#" className="product-button">Till produkten</Link>
          </div>
          <div className="product-card">
            <img src={adventstakeImg} alt="Adventstake - Vågen" />
            <h3>Adventstake - Vågen</h3>
            <p className="price">340,00kr</p>
            <Link to="#" className="product-button">Till produkten</Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="info">
        <h1>Vad är konstsmide?</h1>
        <p>
          Konstsmide är konsten att ge själ - genom eld, hammare och kreativitet
          förvandlas metall till unika skulpturala objekt som är lika vackra som
          funktionella.
        </p>
        <Link to="/hur-jarn-tillverkas" className="main-btn">Hur järn tillverkas</Link>
      </section>
    </>
  )
}

export default Home
