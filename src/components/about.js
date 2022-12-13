import React from 'react'
import '../index.css';
import Hero from '../img_mcsafari/hero_about.png'
import rejse5 from '../img_mcsafari/rejse5.png'
import SubHeader from './sectionHeader';
import ButtonPrim from './btnPrimary';
import AboutStefan from './omStefan';
function about() {
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

    <div className="container-mission">

    <div className="mission-rejser">
      <h3>Vores mission</h3>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum vero earum incidunt iure porro, ratione voluptatibus ea fugiat voluptas quo? Culpa fuga reiciendis facere explicabo quisquam assumenda ex quasi fugiat esse, repellat sed iure amet? Consectetur nisi assumenda sunt eaque sint repellendus nihil itaque eum adipisci hic, accusamus accusantium atque illo ut voluptatibus necessitatibus nemo facere sequi fuga corrupti odit?.</p>
      </div>

      <img src={rejse5} alt="" />


    </div>

    <AboutStefan />



    </div>
  )
}

export default about