import './App.css';
import {  Routes, BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
     

     <p className="font-thin text-4xl bg-red-500">Test</p>
  
     <BrowserRouter>
     <Routes>


      <Route path='/home'> Hjem </Route>

     </Routes>
     
     </BrowserRouter>


    </div>
  );
}

export default App;
