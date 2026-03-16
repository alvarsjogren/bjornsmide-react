import { Link } from 'react-router-dom'
import FeaturedProducts from '../components/FeaturedProducts'
import '../styles/hero.css'
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

      <FeaturedProducts />

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
