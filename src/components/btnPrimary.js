import React from 'react'
import '../index.css'

function btnPrimary(props) {
  return (
    
    <button className="btn-prim">
      {props.text}
    </button>
  )
}

export default btnPrimary