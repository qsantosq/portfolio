import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {




  return (
      
    <div className="header">

    <div className="contenedor-img">
    <img src={require("../../assest/santos.png").default} className="santos" />
    </div>
    <div className="contenedor-menu">
        <div className="navbar">
            <Link to={"/"} className="a" >Home</Link>
        </div>
        <div className="navbar">
             <Link to={"/about"} >About Me</Link>
        </div>
        <div className="navbar">
            <Link to={"/skills"} >Skills</Link>
        </div>
        <div className="navbar">
            <a href="" className="font-nav">
                Portfolio
            </a>
        </div>
        <div className="navbar">
            <a href="" className="font-nav">
                Contacto
            </a>
        </div>
    </div>
    
</div>
  )
}

export default Header