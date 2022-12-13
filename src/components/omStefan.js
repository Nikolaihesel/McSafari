import React from 'react'

import '../index.css';

import ButtonPrim from './btnPrimary';
import StefanL from '../img_mcsafari/stefanl.png';
import StefanR from '../img_mcsafari/stefanr.png'
import SectionHeader from './sectionHeader';


function omStefan(props) {
  return (
 <div className="m-4rem">

    <SectionHeader title="Mød instruktøren"/>

    <div className="about-stefan">

        <div className="left-about-stefan">
    <img src={StefanL} alt="" />
    
    <h4 className="paragraph_white">Jeg er jeres instruktør</h4>
    <ButtonPrim text="Book nu" />
</div>

        <div className="right-about-stefan">


    <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fugit officia ipsa, cum repellendus laboriosam possimus quae molestiae minus suscipit amet corrupti harum ratione beatae fuga laborum dolore debitis, rerum vero atque! Error repellendus enim excepturi, sed, amet nostrum voluptates, perspiciatis qui mollitia voluptate ipsa distinctio ut sequi nam tempore.
    </p>

        <img src={StefanR} alt="" />
    </div>
    </div>
    </div>
  )
}

export default omStefan