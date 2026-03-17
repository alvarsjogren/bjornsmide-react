import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'
import broImg from '../bilder/bro.jpg'
import slendaImg from '../bilder/slenda.jpg'
import adventstakeImg from '../bilder/adventstake3.jpg'
import '../styles/shop-products.css'

const products = [
  {
    name: 'Servettställ - Högakustenbron',
    price: '300,00kr',
    image: broImg,
    alt: 'Servettställ - Högakustenbron',
    link: '/produkter/servettstall-hogakustenbron',
    category: 'servett',
  },
  {
    name: 'Ljuslykta - Sländan',
    price: '300,00kr',
    image: slendaImg,
    alt: 'Ljuslykta - Slända',
    link: '#',
    category: 'ljus',
  },
  {
    name: 'Adventstake - Vågen',
    price: '340,00kr',
    image: adventstakeImg,
    alt: 'Adventstake - Vågen',
    link: '#',
    category: 'advent',
  },
]

function Products() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  let filteredProducts = products

  if (category !== 'all') {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (search !== '') {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Produkter' }]} />
      <section className="shop-products">
        <div className="shop-header">
          <h1>Våra Produkter</h1>
          <div className="shop-controls">
            <select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Alla kategorier</option>
              <option value="servett">Servettställ</option>
              <option value="ljus">Ljuslyktor</option>
              <option value="advent">Adventstakar</option>
              <option value="dekoration">Dekorationer</option>
            </select>
            <input
              type="search"
              className="search-bar"
              placeholder="Sök produkter..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
              alt={product.alt}
              link={product.link}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Products
