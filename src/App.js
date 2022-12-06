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

     



    </div>
  );
}

export default App;
