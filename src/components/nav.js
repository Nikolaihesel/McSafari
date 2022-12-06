import React from 'react'
import '../index.css'
import Logo from '../img_mcsafari/logo.png'


function nav(props) {
  return (
    <div className="nav">

<img className="logo" src={Logo} alt="" />

<ul>
  <li>Hjem</li>
  <li>Offroad</li>
  <li>Rejser</li>
  <li>Om os</li>
</ul>

      


    </div>
  )
}

export default nav