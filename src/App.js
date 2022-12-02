import './App.css';
import {  Routes, BrowserRouter, Route } from 
'react-router-dom'
import Home from './components/home'
import SectionHeader from './components/sectionHeader'
import ButtonPrim from './components/btnPrimary'
import Nav from './components/nav'

function App() {
  return (
    <div className="App">


        <Nav />
        <Home />

      <ButtonPrim  text='Offroad'/>
      <SectionHeader title="oplevelser"/>
      <SectionHeader title="Offroad"/>



    </div>
  );
}

export default App;
