import React from 'react';
import '../index.css';

import Hero from '../img_mcsafari/rejse1.png';
import rejse2 from '../img_mcsafari/rejse2.png'
import rejse3 from '../img_mcsafari/rejse3.png'
import rejse4 from '../img_mcsafari/rejse4.png'

import Travels from './travels'
import SubHeader from './sectionHeader';
import ButtonPrim from './btnPrimary';
import AboutStefan from './omStefan';


function rejser() {
  return (


       <div>
        <div className="header-container"> 
          </div> 
    <div className="hero-subpage_test">
      <img src={Hero} alt="" />
          </div>

      <div className=" paragraph-hero-subpage">
         <SubHeader title="Rejser du ikke vil glemme!"/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est maiores vero, reiciendis, optio eos suscipit ipsa et quis magni inventore tempore? Quasi quod facilis, consequuntur itaque adipisci enim architecto autem dolorum tempora libero pariatur necessitatibus atque recusandae asperiores magni similique unde quibusdam! Mollitia quas dicta amet tempore error eaque repudiandae temporibus obcaecati ut illum iste consectetur laboriosam quis.</p>

        <ButtonPrim text="Læs mere" link="Offroad" />
    </div>


    <SubHeader title="Rejsedestinationer" />

    <div className="products-container">

    <Travels image={rejse2} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse3} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse4} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse2} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse3} travelName="Rwanda" link="home" textButton="Book nu" />
    <Travels image={rejse4} travelName="Rwanda" link="home" textButton="Book nu" />


    </div>


    <div className="video">Video</div>

    <AboutStefan />

    </div>
  )
}

export default rejser