import React from 'react'
import './Technologies.css'
import Js from '../images/icons/jsG.png'
import HtmlG from '../images/icons/htmlG.png'
import CssG from '../images/icons/cssG.png'
import Python from '../images/icons/pythonG.png'
import Flask from '../images/icons/flaskG.png'
import Twind from '../images/icons/tailwindG.png'
import Bootstrap from '../images/icons/bootstrapG.png'
import Figma from '../images/icons/figmaG.png'
import SpringG from '../images/icons/springG.png'
import RouterG from '../images/icons/routerG.png'
import ChakraG from '../images/icons/chakraG.png'
import ReactG from '../images/icons/reactG.png'
import StyleG from '../images/icons/styleG.png'
import Apollo from '../images/icons/apollo.png'
import Graphql from '../images/icons/graphql.png'
import Vite from '../images/icons/vite.png'
import Firebase from '../images/icons/firebase.png'

export default function Header() {
  return (
    <div id="tech">
      <h1 className="techTitle">Technologies</h1>
      <div className="techContainer">
        <div className="fRow">
          <div className="js"><img src={Js} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Javascript</span></div>
        </div>
        <div className="sRow">
          <div className="js"><img src={ReactG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">React</span></div>
          <div className="js"><img src={CssG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">CSS</span></div>
          <div className="js"><img src={HtmlG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">HTML</span></div>
        </div>
        <div className="tRow">
        <div className="js"><img src={Twind} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Tailwind</span></div>
        <div className="js"><img src={Bootstrap} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Bootstrap</span></div>
        <div className="js"><img src={ChakraG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Chakra UI</span></div>
        <div className="js"><img src={Python} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Python</span></div>
        <div className="js"><img src={Flask} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Flask</span></div>
        </div>
        <div className="fRow">
        <div className="js"><img src={Figma} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Figma</span></div>
        <div className="js"><img src={RouterG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Router</span></div>
        <div className="js"><img src={SpringG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Spring</span></div>
        <div className="js"><img src={Apollo} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Apollo</span></div>
        <div className="js"><img src={Graphql} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">GraphQL</span></div>
        </div>
        <div className="fiRow">
        <div className="js"><img src={StyleG} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">R-Style</span></div>
        <div className="js"><img src={Vite} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Vite</span></div>
        <div className="js"><img src={Firebase} alt="icon" className='tIcon jsIcon' /><span className="jsSpan">Firebase</span></div>
        </div>
      </div>
    </div>
  )
}
