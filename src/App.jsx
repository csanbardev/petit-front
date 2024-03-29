
import './App.css'
import { About } from './components/About/About'
import { Acortador } from './components/Acortador/Acortador'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'
import { Nav } from './components/Nav/Nav'

function App() {

  return (
    <>
    <Nav />
    <Banner />
    <Acortador />
    <About />
    <Footer />
    </>
  )
}

export default App
