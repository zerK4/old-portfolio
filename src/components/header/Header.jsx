import React, { useRef } from 'react'
import './Header.css'
import { HiMenuAlt1 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import Facebook from '../images/icons/facebook.svg'
import Github from '../images/icons/github.svg'
import Linkedin from '../images/icons/linkedin.svg'
import Replit from '../images/icons/replit.svg'

export default function Header() {
  const navRef = useRef()

  const navHandler = () => {
    navRef.current.classList.toggle('mediaNav')
  }
  return (
    <header id="home">
      <div className="logo">
      <h1 className='logoName'>Portfolio</h1>
      </div>
      <nav ref={navRef}>
        <a href="#projects"><li className="link">Projects</li></a>
        <a href="#tech"><li className="link">Technologies</li></a>
        <a href="#about"><li className="link">About</li></a>
        <a href="#contact"><li className="link">Contact</li></a>
        <CgClose className='mediaIcons closeIcon' onClick={navHandler}/>
        <div className="social">
        <a href="https://www.facebook.com/sebik.yah"><img src={Facebook} alt="Facebook icon" className='socialIcon' /></a>
        <a href="https://github.com/zerK4"><img src={Github} alt="Github icon" className='socialIcon' /></a>
        <a href="https://replit.com/@SebastianPavel1"><img src={Replit} alt="Replit icon" className='socialIcon' /></a>
        <a href='https://www.linkedin.com/in/sebastian-pavel-0851a719b/'><img src={Linkedin} alt="Linkedin icon" className='socialIcon' /></a>
      </div>
      </nav>
      <HiMenuAlt1 className='mediaIcons menuIcon' onClick={navHandler}/>
    </header>
  )
}
