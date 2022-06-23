import React from 'react'
import './Projects.css'
import Project1 from '../images/project1.png'
import Pokemon from './Pokemon/Pokemon'
import TodoList from './todoapp/TodoList'
import TodoForm from './todoapp/TodoForm'
import Css from '../images/icons/cssG.png'
import HTML from '../images/icons/htmlG.png'
import JS from '../images/icons/jsG.png'
import ReactG from '../images/icons/reactG.png'
import Firebase from '../images/icons/firebase.png'
import ShopImg from '../images/shop.png'
import Vite from '../images/icons/vite.png'
import RouterG from '../images/icons/routerG.png'
import Restaurant from '../images/restaurant.png'
import Admin from '../images/admin.png'

export default function Header() {
  return (
    <div id="projects">
      <h1 className='pTitle'>Projects</h1>
      <div className="projectsContainer">
        <div className="pCard pokemonCard">
          <div className="pLeft">
            <Pokemon />
          </div>
          <div className="pCRight">
            <h3 className="pCTitle">Pokemon DEX</h3>  
            <p className="pCDesc">
              A simple pokemon generator.
            </p>
            <div className="techUsed">
              <h3 className="techName">Technologies used.</h3>
              <div className="techs">
              <img src={HTML} alt="" className='techIcon' />
              <img src={Css} alt="" className='techIcon'/>
              <img src={ReactG} alt="" className='techIcon' />
              <img src={JS} alt="" className='techIcon'/>
              </div>
            </div>
            <div className="pBSpace">
              <a href="https://github.com/zerK4/pokemonReact/tree/main/Pokemon"><button className="pBbuton seeCode">See code</button></a>
            </div>
          </div>
        </div>
        <div className="pCard">
					<div className="pLeft">
						<TodoList />
					</div>
          <div className="pCRight">
            <h3 className="pCTitle">ToDo App</h3>  
            <p className="pCDesc">
              To-Do application with edit, complete and delete functions.
            </p>
            <div className="techUsed">
              <h3 className="techName">Technologies used.</h3>
              <div className="techs">
              <img src={HTML} alt="" className='techIcon' />
              <img src={Css} alt="" className='techIcon'/>
              <img src={ReactG} alt="" className='techIcon' />
              <img src={JS} alt="" className='techIcon'/>
              </div>
						</div>
            <div className="pBSpace">
              <a href="https://github.com/zerK4/todoApp"><button className="pBbuton seeCode">See code</button></a>
            </div>
          </div>
        </div>
        <div className="pCard">
					<div className="pLeft shopLeft">
						<img src={ShopImg} />
					</div>
          <div className="pCRight">
            <h3 className="pCTitle">Shoes online shop</h3>  
            <p className="pCDesc">
              Online sneakers store.
            </p>
            <div className="techUsed">
              <h3 className="techName">Technologies used.</h3>
              <div className="techs">
              <img src={HTML} alt="" className='techIcon' />
              <img src={Css} alt="" className='techIcon'/>
              <img src={JS} alt="" className='techIcon'/>
              </div>
						</div>
            <div className="pBSpace">
              <a href="https://github.com/zerK4/shop"><button className="pBbuton seeCode">See code</button></a>
              <a href="https://zerk4.github.io/shop/"><button className="pBbuton seeCode">Live Demo</button></a>
            </div>
          </div>
        </div>
        <div className="pCard">
					<div className="pLeft restaurant">
						<img src={Restaurant} className="restaurantImg"/>
					</div>
          <div className="pCRight">
            <h3 className="pCTitle">Restaurant & events website</h3>  
            <p className="pCDesc">
              Website for restaurant and event location.
							Uses API from EDAMAM which is allowing only 10 requests per minute.
							If something crashes on Menu section please wait for 1 minute and it should be all great.
            </p>
            <div className="techUsed">
              <h3 className="techName">Technologies used.</h3>
              <div className="techs">
              <img src={HTML} alt="" className='techIcon' />
              <img src={Css} alt="" className='techIcon'/>
              <img src={ReactG} alt="" className='techIcon' />
              <img src={JS} alt="" className='techIcon'/>
              <img src={Vite} alt="" className='techIcon'/>
              </div>
						</div>
            <div className="pBSpace">
              <a href="https://github.com/zerK4/restaurant-vite"><button className="pBbuton seeCode">See code</button></a>
              <a href="https://zerk4.github.io/restaurant-vite/"><button className="pBbuton seeCode">Live Demo</button></a>
            </div>
          </div>
        </div>
        <div className="pCard">
					<div className="pLeft movieClone">
						<h1>
							Movie Page
						</h1>
					</div>
          <div className="pCRight">
            <h3 className="pCTitle">Movie streaming clone.</h3>  
            <p className="pCDesc">
              Movie straming clone.
            </p>
            <div className="techUsed">
              <h3 className="techName">Technologies used.</h3>
              <div className="techs">
              <img src={HTML} alt="" className='techIcon' />
              <img src={Css} alt="" className='techIcon'/>
              <img src={JS} alt="" className='techIcon'/>
              </div>
						</div>
            <div className="pBSpace">
              <a href="https://github.com/zerK4/https://github.com/zerK4/moviePage"><button className="pBbuton seeCode">See code</button></a>
              <a href="https://zerk4.github.io/moviePage/"><button className="pBbuton seeCode">Live Demo</button></a>
            </div>
          </div>
        </div>
        <div className="pCard">
					<div className="pLeft movieClone">
						<h1>
							<img src={Admin} className="restaurantImg"/>
						</h1>
					</div>
          <div className="pCRight">
            <h3 className="pCTitle">Admin Panel CRUD</h3>  
            <p className="pCDesc">
              Advanced admin panel made with firebase.
							Not optimized for mobile yet.
            </p>
            <div className="techUsed">
              <h3 className="techName">Technologies used.</h3>
              <div className="techs">
              <img src={HTML} alt="" className='techIcon' />
              <img src={Css} alt="" className='techIcon'/>
              <img src={ReactG} alt="" className='techIcon' />
              <img src={Vite} alt="" className='techIcon'/>
              <img src={JS} alt="" className='techIcon'/>
              <img src={Firebase} alt="" className='techIcon'/>
              <img src={RouterG} alt="" className='techIcon'/>
              </div>
						</div>
            <div className="pBSpace">
              <a href="https://replit.com/@SebastianPavel1"><button className="pBbuton seeCode">See code</button></a>
              <a href="https://adminpage.sebastianpavel1.repl.co/"><button className="pBbuton seeCode">Live Demo</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
