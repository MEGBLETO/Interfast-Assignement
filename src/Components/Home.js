import React from 'react'
import {Link} from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";


const Home = () => {
  return (
    <div className="showcase">
      <Link to='/interventions'>
        <button>Mes interventions</button>
      </Link>

      <Link to='/interventions'>
        <button>Mes interventions</button>
      </Link>
      
      <h1 className='icone'><AiFillPlusCircle/></h1>

    </div>
  )
}

export default Home
