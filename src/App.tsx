{/* imports */}
import './App.css'
import NavBar from './components/global/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work/Work'
{/* import Skills from './components/Skills' */}


function App() {
  return (
  <>
    <NavBar />
    <Intro />
    <About />
    {/* <Skills /> */}
    <Work />
  </>
  )
}

export default App
