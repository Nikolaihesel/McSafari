import React from 'react'
import '../index.css'
import ButtonPrim from './btnPrimary'

function imgTxtBtn(props) {
  return (
    <div className="column-container">  

        <h2 className="sub-header_black">
            {props.header}
                </h2>
            <img className=" w50 " src={props.img} alt="" />
            <p className="paragraph" > {props.text}</p>
            <ButtonPrim text={props.btntxt}/>
     </div>
  )
}

export default imgTxtBtn