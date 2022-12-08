import React from 'react'
import ButtonPrim from './btnPrimary'
function travels(props)  {

    const products =  [

         {
            id: 1,
            place: "Rwanda",
            date: "Februar",
            year: 2023
          },

          {
            id: 2,
            place: "Lake Victoria",
            date: "Juli",
            year: 2023
          },

          {
            id: 3,
            place: "Tanzania",
            date: "Oktober",
            year: 2023
          },

            {
            id: 4,
            place: "Offroad skole",
            date: "test",
            year: "test"
          }

        ]

const listItems = products.map((number) =>
  <li>{number.place}</li>
 
);
  return (
    <div className=" travels-home flex-col justify-start  ">

        <img src={props.image} alt="" className="travel-img-home" />
        <h3 className="sub-header_black">  {props.travelName}  </h3>
      <ButtonPrim link={props.link} text={props.textButton}/>
          
      </div>
  )
}

export default travels