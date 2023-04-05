
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode , setMode] =useState('light');
  // const [alert , setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //   msg : message,
  //   type : type
  // })
  // };


  const toggleMode = () =>{
      if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ="#042743";
      // showAlert("Dark mode has been enabled", "success");
      document.title ="TextUtils Dark-mode";

      // setInterval( () => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);

      // setInterval( () => {
      //   document.title = "Download TextUtils Now";
      // }, 1500);


     }
      else{
      setMode('light')
      document.body.style.backgroundColor ="white";
      // showAlert("Light mode has been enabled", "success");
      document.title =" TextUtils Light-mode"
        }
    
    }
  

  return (
    <>
     {/* <Navbar title ="Booking App" aboutText = "About Booking App" /> 
     <Navbar />  */}
      <Router> 
     <Navbar title ="TextEditor" mode={mode} toggleMode={toggleMode}/>
     {/* <Alert alert="Im hero"/> */}
      <div className='container my-3'>
        
          <Routes>
          <Route path="/about" element={<About mode={mode}/>}>        
          </Route>
           <Route path='/' element={ <Textform heading  = "Enter the text" mode={mode} />}>       
        </Route>
          </Routes>
      </div>
     </Router> 
    </>
  );

   }
export default App;
