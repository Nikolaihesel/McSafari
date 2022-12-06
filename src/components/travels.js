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

    
        

  return (
    <div className=" travels-home">
        

        {products.map(() => {
            <p> {products.id}</p>
        })}

          </div>
  )
}

export default travels