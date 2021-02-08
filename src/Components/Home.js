import React from 'react'
import {Link} from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";




const Home = () => {
  return (
    <div className="showcase">

      <div id="pentagon" className="item1"></div>
      <div id="pentagon" className="item2"></div>
      <div id="pentagon" className="item3"></div>
      <div id="pentagon" className="item4"></div>
     

      <Link className="link" to='/interventions'>
      <div className="button"><h1><BsArrowRight/>
      </h1> Mes interventions 
      <div className="notif"><h3>3</h3></div>
      </div>
      </Link>

        <div className="button"><h1><GiBackwardTime/></h1>Historiques</div>
      
      <h1 className='icone'><AiFillPlusCircle/></h1>

    </div>
  )
}

export default Home
