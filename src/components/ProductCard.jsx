import { Link } from 'react-router-dom'

// Product card to display the info. Takes product info as prop.
function ProductCard({ name, price, image, alt, link }) {
  return (
    <div className="product-card">
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <Link to={link} className="product-button">
        Till produkten
      </Link>
    </div>
  )
}

export default ProductCard
