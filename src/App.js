import './App.css';
import { Routes, Route } from "react-router-dom"
// Componenets

import SectionHeader from './components/sectionHeader'
import ButtonPrim from './components/btnPrimary'
import Nav from './components/nav'

// pages
import Home from './components/home'
import About from './components/about'
import Offroad from './components/offroad'
import Rejser from './components/rejser'




function App() {
  return (
    <div className="App">


        <Nav txt1="Hjem" txt2="Offroad" txt3="Rejser" txt4="Om os"/>

<Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="Offroad" element={ <Offroad/> } />
        <Route path="Rejser" element={ <Rejser/> } />
        <Route path="About" element={ <About/> } />

      </Routes>
     



    </div>
  );
}

export default App;
