import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Socials from './components/Socials'
import './index.css'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Socials/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}
export default App;