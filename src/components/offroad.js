import React from 'react'
import '../index.css'
import Hero from '../img_mcsafari/heroOffroad.png';
import ButtonPrim from './btnPrimary';
import SubHeader from './sectionHeader';
import Calender from '../img_mcsafari/2imgcal.png'
import Person from '../img_mcsafari/3imgpers.png'
import Years from '../img_mcsafari/3img-10.png'
import img1 from '../img_mcsafari/Group 66.png'
import img2 from '../img_mcsafari/Group 67.png'
import img3 from '../img_mcsafari/Group 68.png'


import AboutStefan from './omStefan';

function offroad() {
  return (
    <div>
        <div className="header-container"> 
          </div> 
    <div className="hero-subpage_test">
      <img src={Hero} alt="" />
          </div>
     
      <div className=" paragraph-hero-subpage">
         <SubHeader title="Offroad hver lørdag!"/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est maiores vero, reiciendis, optio eos suscipit ipsa et quis magni inventore tempore? Quasi quod facilis, consequuntur itaque adipisci enim architecto autem dolorum tempora libero pariatur necessitatibus atque recusandae </p>

        <ButtonPrim text="Læs mere" link="Offroad" />
      </div>

        <br />
        <br />
        <br />
        <SubHeader title="Fakta"/>


      <div className="three-piece-offroad">

      <div className="three-container">
 
      <img src={Calender} alt="" />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam labore accusamus sint modi rerum, </p>
      </div>
      <div className="three-container">
      <img src={Person} alt="" />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam labore accusamus sint modi rerum, </p>
      </div>
      <div className="three-container">
      <img src={Years} alt="" />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam labore accusamus sint modi rerum, </p>
      </div>
    </div>


    <AboutStefan />



      <SubHeader title="Sidste off road dag" />

 <div className="three-piece-offroad">

      <div className="three-container">
 
      <img className="img-offroad-dag" src={img1} alt="" />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam labore accusamus sint modi rerum, </p>
      </div>
      <div className="three-container">
      <img className="img-offroad-dag" src={img2} alt="" />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam labore accusamus sint modi rerum, </p>
      </div>
      <div className="three-container">
      <img   className="img-offroad-dag" src={img3} alt="" />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam labore accusamus sint modi rerum, </p>
      </div>
    </div>
    

     
      </div>


    

  )
}

export default offroad