import React from 'react'


import '../index.css'
import Logo from '../img_mcsafari/logo.png'
import { Link } from "react-router-dom";
import Home from '../components/home'


function nav(props) {
  return (
    <div className="nav">

<img className="logo" src={Logo} alt="" />

<ul>
  <Link  className="paragraph_white" to="Home">{props.txt1}</Link>
  <Link  className="paragraph_white" to="Offroad">{props.txt2}</Link>
  <Link   className="paragraph_white" to="Rejser">{props.txt3}</Link>
  <Link  className="paragraph_white"  to="About">{props.txt4}</Link>
</ul>

      


    </div>
  )
}

export default nav