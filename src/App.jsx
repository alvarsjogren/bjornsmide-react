import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import About from './pages/About'
import IronPage from './pages/IronPage'
import './styles/styles.css'

// Change the site depending on what content to serve
// with the header and footer in between.
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="divider"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkter" element={<Products />} />
        <Route path="/produkter/servettstall-hogakustenbron" element={<ProductDetail />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/hur-jarn-tillverkas" element={<IronPage />} />
      </Routes>
      <div className="divider"></div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
