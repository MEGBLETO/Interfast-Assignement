import React from 'react'
import {Link} from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";




const Home = () => {
  return (
    <div className="showcase">
      <Link className="link" to='/interventions'>
      <div className="button"><h1><BsArrowRight/></h1> Mes interventions </div>
      </Link>

      <Link className="link" to='/interventions'>
        <div className="button"><h1><GiBackwardTime/></h1>Historiques</div>
      </Link>
      
      <h1 className='icone'><AiFillPlusCircle/></h1>

    </div>
  )
}

export default Home
