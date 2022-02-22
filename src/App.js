import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import './App.css'
import { Route,Routes } from "react-router-dom";


const App = () => {
  const [color,setColor] = useState(true)
  const [mode,setMode] = useState("Light")
  const [alert,setAlert] = useState(null)
  document.title = "TextUtils";
  const showAlert = (msg,type)=>{
        setAlert({msg,type})
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }
  const switchBtn = event =>{
      if(document.getElementById('flexSwitchCheckDefault').checked===true){
          setColor(false)
          setMode("Dark")
          showAlert("Dark mode has been enabled","success")
      }else{
          setColor(true)
          setMode("Light")
          showAlert("Light mode has been enabled","success")
      }
  }
  return (
    <div className={color?'bg-light background':'bg-dark background'}>
     <Navbar title="TextUtils" color={color} switch={switchBtn} mode={mode} />
     <Alert alert={alert} />
     <div className="container mt-1">
       {/* <TextForm heading="Enter the text to analyze below" title="TextUtils" color={color} />    */}
       <Routes>
       <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" title="TextUtils" color={color} />}   />
       <Route exact path="about" element={<About />} />
       </Routes>
     </div> 
     </div>  
  )
}

export default App
