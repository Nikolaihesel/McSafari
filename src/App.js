import './App.css';
import './index.css'
import { Routes, Route } from "react-router-dom"
// Componenets
import Nav from './components/nav'
import Footer from './components/footer'
// pages
import Home from './components/home'
import About from './components/about'
import Offroad from './components/offroad'
import Rejser from './components/Rejser'
import Gui from './components/Gui'




function App() {
  return (
    <div className="App">
        <Nav txt1="Hjem" txt2="Offroad" txt3="Rejser" txt4="Om os"/>

<Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="Offroad" element={ <Offroad/> } />
        <Route path="Rejser" element={ <Rejser/> } />
        <Route path="About" element={ <About/> } />
        <Route path="Gui" element={ <Gui/> } />
    </Routes>
<Footer />
  </div>
  
  );
}

export default App;
