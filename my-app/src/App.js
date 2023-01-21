import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [ mode , newMode]  = useState('light');

  const toggleMode = () =>{
    if ( mode === 'light'){
      newMode('dark');
      document.body.style.backgroundColor = '#172250' ; 
    }
    else{
      newMode('light');
      document.body.style.backgroundColor = 'white' ; 

    }

  }
  return (
    <>
   <Navbar title= "Text Utilities" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>

   <div className="container my-3">
    
    <TextForm heading = "Enter text to analyse below" mode = {mode}/>
    <About/>
   </div>
  </>
  );
}

export default App;
