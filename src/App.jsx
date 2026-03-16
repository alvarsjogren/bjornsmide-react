import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import './styles/styles.css'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="divider"></div>
      
      <div className="divider"></div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
