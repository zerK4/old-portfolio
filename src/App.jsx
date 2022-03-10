import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Technologies from './components/technologies/Technologies'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import React, { useRef } from 'react'

function App() {

    const upRef = useRef()
  
    const upHandler = () =>{
      if(document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
        const span = upRef.current
        span.style.display = 'flex'
    }else{
      const span = upRef.current
      span.style.display = 'none'
    }
    }
    window.onscroll = function(){upHandler()};

    return (
    <div className="Portfolio">
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Footer />
      <div className="copy">&copy; Sebastian Pavel</div>
      <a href="#home" className='goUp' ref={upRef}><BsArrowUpCircleFill /></a>
    </div>
    )
}

export default App
