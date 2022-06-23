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
          <br />
        <br></br>
        <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'This is my portfolio.',
              5000,
              'This is my personal website.',
              5000
            ]}
          />
          <br />
          If you have the  
        {' '}
        <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'ideea/',
              3000,
              '/design/',
              3000,
              '/template',
              3000
            ]}
          />
        {' '} i can make it work!
      </p>
      <a href="#contact"><button className="heroButton">
				<Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'Ccchaaa',
              5000,
							'Contact me',
							5000,
							'Call me',
							5000,
							'Email me',
							5000
            ]}
          />	
			</button></a>
      </div>
      <div className="rightHero">
            <img src={Hero3} alt="Hero image" className='hero3Img heroImg' /> 
            <img src={Hero1} alt="Hero image" className='hero1Img heroImg' />
            <img src={Hero2} alt="Hero image" className='hero2Img heroImg' />
            <img src={Hero4} alt="Hero image" className='hero4Img heroImg' />
      </div>
    </section>
  )
}
