import React from 'react'

function travels()  {

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
    <div className=" travels-home">
        
        <ul>
        
            {listItems}
       
        </ul>

          </div>
  )
}

export default travels