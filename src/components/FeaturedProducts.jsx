import { Link } from 'react-router-dom'
import broImg from '../bilder/bro.jpg'
import slendaImg from '../bilder/slenda.jpg'
import adventstakeImg from '../bilder/adventstake3.jpg'
import '../styles/featured-products.css'

const products = [
  {
    name: 'Servettställ - Högakustenbron',
    price: '300,00kr',
    image: broImg,
    alt: 'Servettställ - Högakustenbron',
    link: '/produkter/servettstall-hogakustenbron',
  },
  {
    name: 'Ljuslykta - Sländan',
    price: '300,00kr',
    image: slendaImg,
    alt: 'Ljuslykta - Slända',
    link: '#',
  },
  {
    name: 'Adventstake - Vågen',
    price: '340,00kr',
    image: adventstakeImg,
    alt: 'Adventstake - Vågen',
    link: '#',
  },
]

function FeaturedProducts() {
  const randomizedProducts = [...products].sort(() => Math.random() - 0.5)

  return (
    <section className="featured-products">
      <h2>Utvalda Produkter</h2>
      <div className="products-grid">
        {randomizedProducts.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.alt} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <Link to={product.link} className="product-button">
              Till produkten
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
