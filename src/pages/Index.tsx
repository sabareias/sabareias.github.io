{/* imports */}
import '../App.css'
import NavBar from '../components/global/NavBar'
import Intro from '../components/Intro/Intro'
import About from '../components/About'
import Projects from '../components/Projects/Projects'
import Footer from '../components/global/Footer'
{/* import Skills from './components/Skills' */}


function Index() {
  return (
  <>
    <NavBar />
    <Intro />
    <About />
    {/* <Skills /> */}
    <Projects />
    <Footer />
  </>
  )
}

export default Index
