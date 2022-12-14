import React from 'react';
import '../index.css';
import { useState, useEffect } from 'react';


import Hero from '../img_mcsafari/rejse1.png';
import rejse2 from '../img_mcsafari/rejse2.png'
import rejse3 from '../img_mcsafari/rejse3.png'
import rejse4 from '../img_mcsafari/rejse4.png'

import Travels from './travels'
import SubHeader from './sectionHeader';
import ButtonPrim from './btnPrimary';
import AboutStefan from './omStefan';


import {db} from '../firebase-config';
import {collection, getDocs, addDoc} from 'firebase/firestore';




function Rejser() {
  const [newTrip, setNewTrip] = useState('');
  const [newDate, setNewDate] = useState(0);
  const [trips, setTrips] = useState([]);
  const tripsCollectionRef = collection(db, 'Products')


const createTrip = async () => {

await addDoc(tripsCollectionRef, {location: newTrip, date: newDate})

}



useEffect(() => {
const getTrips = async () => {

  const data = await getDocs(tripsCollectionRef);
  setTrips(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

};
getTrips();
}, [] )
  return (
       <div>
        <div className="header-container"> 
          </div> 
    <div className="hero-subpage_test">
      <img src={Hero} alt="" />
          </div>

      <div className=" paragraph-hero-subpage">
         <SubHeader title="Rejser du ikke vil glemme!"/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est maiores vero, reiciendis, optio eos suscipit ipsa et quis magni inventore tempore? Quasi quod facilis, consequuntur itaque adipisci enim architecto autem dolorum tempora libero pariatur. </p>

        <ButtonPrim text="Læs mere" link="Offroad" />
    </div>


    <div className="destination-container">

    <SubHeader title="Rejsedestinationer" />

    <div className="products-container">

      {trips.map((trip) => {

   return(

    <Travels image={rejse2} travelName={[trip.location, trip.date]} link="home" textButton="Book nu" />
     )  })}
    <Travels image={rejse3} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse4} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse2} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse3} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse4} travelName="Rwanda" link="home" textButton="Book nu" />


    
    </div>

      <input onChange={(event) => {setNewTrip(event.target.value)}} placeholder="location" />
      <input onChange={(event) => {setNewDate(event.target.value)}}  type="number" placeholder="date" />


    <button onClick={createTrip}> Create trip </button>
    {trips.map( (trip) => {
      return (
        <div>
          {" "}
          <h1>{trip.location}</h1>
         
           </div>
      )
    } )}

     
    </div>


    <div className="video">Video</div>

    <AboutStefan />

    </div>
  )
}

export default Rejser