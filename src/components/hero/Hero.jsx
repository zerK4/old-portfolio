import React from 'react'
import './Hero.css'
import Typical from 'react-typical'
import Hero3 from '../images/hero3.png'
import Hero1 from '../images/hero1.png'
import Hero2 from '../images/hero2.png'
import Hero4 from '../images/hero4.png'
export default function Header() {

  return (
    <section id="hero">
      <div className="leftHero">
      <h1 className="heroTitle">
      <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'Welcome!',
              1000
            ]}
          />
      </h1>
      <p className="heroDesc">

        <p>I`m Sebastian Pavel, i am a {" "}
        <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'developer',
              3000,
              'husband',
              3000,
              'designer',
              3000,
              'driver',
              3000,
              'hard worker',
              3000,
            ]}
          />
          </p>
        <br></br>
        <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'This is my portfolio',
              5000,
              'This is my personal website',
              5000
            ]}
          />
          , it`s purpose is to let 
        you {' '}
        <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'explore',
              3000,
              'check',
              3000,
              'view',
              3000,
              'modify',
              3000
            ]}
          />
        {' '} my projects and also whatever else i did and know.
      </p>
      <button className="heroButton">Cchaaaa</button>
      </div>
      <div className="rightHero">
            <img src={Hero3} alt="Hero image" className='hero3Img' /> 
            <img src={Hero1} alt="Hero image" className='hero1Img' />
            <img src={Hero2} alt="Hero image" className='hero2Img' />
            <img src={Hero4} alt="Hero image" className='hero4Img' />
      </div>
    </section>
  )
}
