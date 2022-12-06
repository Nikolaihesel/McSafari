import React from 'react'
import '../index.css'
import ButtonPrim from './btnPrimary'
import Experinces from './imgTxtBtn'
import SectionHeader from './sectionHeader'
import Travels from './travels'
import Hero from '../img_mcsafari/hero_mcsafari.png'
import Offroad from '../img_mcsafari/Enduro1_moss.jpeg'
import Travel from '../img_mcsafari/rejser.jpeg'

function home() {
  return (
    <div className="home">
    <div className="hero-container">

    <img className="hero_img" src={Hero} alt="" />
    </div>



    <div className="home-flex-container-hero">

    <div className="flex-1"></div>

    <div className=" heading-home">

      <h1 className="prim-header">
      Oplevelser på motorcykel
      </h1>
     <h2 className="sub-header mx-w40">McSafari giver dig unikke oplevelser på motorcykel, du aldrig havde drømt om </h2>

       <div className="row-container gap-20 mt-2">
        <ButtonPrim text="Offroad" />
        <ButtonPrim text="Rejser" />
       </div>
       
    </div>

    </div>



    <div className="experiences">
      <SectionHeader title="Oplevelser" />

      <div className=" exp-home">

      <Experinces header="Offroad"  img={Travel} text=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata  "

      btntxt="Læs mere" />

      <Experinces header="Offroad"  img={Travel} text=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata  "

      btntxt="Læs mere" />

      </div>



      <div className="video bg-blue-200 h-screen w-screen"> Video</div>


        <div className="travels-section">

          <Travels image={Offroad} travelName="Rwanda Feb 2023" textButton="Læs mere"/> 

        </div>

    </div>
    </div>
  )
}

export default home