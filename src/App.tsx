{/* imports */}
import './App.css'
import NavBar from './components/global/NavBar'
import Intro from './components/Intro/Intro'
import About from './components/About'
import Work from './components/Work/Work'
import Footer from './components/global/Footer'
{/* import Skills from './components/Skills' */}


function App() {
  return (
  <>
    <NavBar />
    <Intro />
    <About />
    {/* <Skills /> */}
    <Work />
    <Footer />
  </>
  )
}

export default App
