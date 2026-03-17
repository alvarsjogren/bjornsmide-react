import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import './styles/styles.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="divider"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkter" element={<Products />} />
        <Route path="/produkter/servettstall-hogakustenbron" element={<ProductDetail />} />
      </Routes>
      <div className="divider"></div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
