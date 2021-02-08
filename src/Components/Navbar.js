import React from 'react'
import { ImExit } from "react-icons/im"
import Logo from '../img/Logo.PNG'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="first">Accueil</h3>
      <div className="second">
         <img className="img" src={Logo} alt=""/>
        <p>Bonjour, john</p>
        <button className="btn">07/09/2020</button>
         <h3> <ImExit /> </h3> 
      </div>
    </nav>
    
  )
}

export default Navbar
