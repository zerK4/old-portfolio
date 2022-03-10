import React from 'react'
import './About.css'
import Dev from '../images/dev.png'
import Itsm from '../images/itsm.png'

export default function Header() {
  return (
    <div id="about">
      <h1 className="aTitle">About me</h1>
      <div className="aboutContainer">
        <div className="aCard">
          <h3 className="aCardTitle">Web Development</h3>
          <p className='aCardDesc'>This jurney started 3 years ago when i started learning python, 
            a great language but did not fulfilled my visual requirements. 
            So i started learning Javascript, i was a bit used with HTML and 
            CSS since when i was a little boy i was creating Metin2 servers and 
            those needed a website for registration with PHP. Since more than 
            a year i`m creationg websites with JS, HTML, CSS and from a while 
            now working with REACT too.</p>
            <img src={Dev} alt="Dev img" className='devImg'/>
        </div>
        <div className="aCard itsmCard">
          <h3 className="aCardTitle">ITSM</h3>
          <p className='aCardDesc'>For more that 3 years now i worked as 
          Service desk agent (that`s how i got in), Senior Analyst, 
          Problem Manager, Change Manager, Release Manager, 
          Backup for the Team leader(handling the team and urgent 
          escalations). Now i work as a Service Now Administrator.</p>
            <img src={Itsm} alt="Dev img" className='itsmImg'/>
        </div>
      </div>
    </div>
  )
}
