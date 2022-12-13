import React from 'react'
import '../index.css'
import ButtonPrim from './btnPrimary'
import Experinces from './imgTxtBtn'
import SectionHeader from './sectionHeader'
import Travels from './travels'

//img
import Exp1 from '../img_mcsafari/exp1offroad.png'
import Exp2 from '../img_mcsafari/exp2offroad.png'
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

       <div className="row-container-btn-home">
        <ButtonPrim link="Offroad" text="Offroad" />
        <ButtonPrim link="Rejser" text="Rejser" />
       </div>
       
    </div>

    </div>


    <div className="experiences">
      <SectionHeader title="Oplevelser" />

      <div className=" exp-home ">

      <Experinces header="Offroad"  img={Exp1} text=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata  "

      btntxt="Læs mere" />

      <Experinces header="Offroad"  img={Exp2} text=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata  "

        btntxt="Læs mere" />

      </div>
  


      <div className="video bg-blue-200 h-screen w-screen"> Video</div>


       <div className="mt-20 mb-20">
            <SectionHeader  title="Rejser"/>

            </div>


        <div className="travels-section">

          <Travels image={Offroad} travelName="Rwanda Feb 2023" textButton="Læs mere" link="Offroad"/> 
          <Travels image={Offroad} travelName="Rwanda Feb 2023" textButton="Læs mere" link="Offroad"/> 
          <Travels image={Offroad} travelName="Rwanda Feb 2023" textButton="Læs mere" link="Offroad"/> 
          <Travels image={Offroad} travelName="Rwanda Feb 2023" textButton="Læs mere" link="Offroad"/> 
       

        </div>



        <div className="about-mcsafari-home">

          <h3 className="sub-header">McSafari</h3><br />
          <h4 className="sub-header">Vi leverer unikke oplevelser til alle!</h4> <br />
          <p className="paragraph_white about-mc-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita, ducimus eius inventore sed in totam provident mollitia illum eos. Rem, atque. Voluptatum itaque labore ipsum suscipit nam minima saepe. Iste saepe obcaecati enim fugiat animi dolores voluptatibus magni est eum minus repellendus consectetur neque laudantium,
          
        quo inventore labore dolorum perferendis atque, eos nesciunt rerum illum aliquid! Esse reprehenderit, minima fugit eligendi iste velit itaque totam enim iure fuga perferendis quo at maiores doloribus eaque illo nemo quia fugiat! Est harum cumque reprehenderit autem quas placeat, illum necessitatibus odit eos
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veniam nam sequi a adipisci facere, at velit praesentium voluptate maiores voluptatum. Facilis tenetur asperiores maxime! Assumenda quia autem doloremque nisi nobis repudiandae reiciendis sit, deleniti quidem mollitia, quis impedit reprehenderit? Esse iusto fugiat quibusdam quos voluptatum, ullam, laborum quasi, minus quisquam tenetur voluptates nulla a. Porro sequi eum iusto id vero, cumque facilis labore alias repellendus vitae? Doloribus perspiciatis illum laudantium quibusdam, reiciendis esse expedita, saepe magnam cumque ut voluptatum quidem dignissimos illo, aperiam natus accusamus itaque. Cupiditate, unde, pariatur alias eos maiores libero sapiente fuga animi, porro voluptatum quasi.</p>
        </div>

    </div>
    </div>
  )
}

export default home