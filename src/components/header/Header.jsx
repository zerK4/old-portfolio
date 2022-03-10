import React, { useRef } from 'react'
import './Header.css'
import { HiMenuAlt1 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import Navball from '../images/icons/navBall.svg'
import Facebook from '../images/icons/facebook.svg'
import Github from '../images/icons/github.svg'
import Linkedin from '../images/icons/linkedin.svg'

export default function Header() {
  const navRef = useRef()

  const navHandler = () => {
    navRef.current.classList.toggle('mediaNav')
  }

  let fbStyle = { color: '#699BF7' }
  let instaStyle = { color: '#9313EA' }
  let linkedinStyle = { color: '#0E72A3' }
  let githubStyle = { color: '#171515' }

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
        <a href="#"><img src={Facebook} alt="Facebook icon" className='socialIcon' /></a>
        <a href="#"><img src={Github} alt="Facebook icon" className='socialIcon' /></a>
        <a href='#'><img src={Linkedin} alt="Facebook icon" className='socialIcon' /></a>
      </div>
      </nav>
      <HiMenuAlt1 className='mediaIcons menuIcon' onClick={navHandler}/>
    </header>
  )
}
