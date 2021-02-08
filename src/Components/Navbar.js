import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { ImExit } from "react-icons/im"
import Logo from '../img/Logo.PNG'

const Navbar = () => {

const [title, setTitle] = useState("Acceuil")

const history = useHistory() 

const setNewTitle = () =>{

  history.listen( location =>  {
    setTitle("Interventions")
   });
  
}

 useEffect(() => {
  setNewTitle()
}, [history]);


  return (
    <nav className="navbar">
      <h3 className="first">{title}</h3>
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
