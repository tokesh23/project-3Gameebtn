 import React, { useState } from 'react'
 import "./App.css" 
import StartGame from './components/StartGame'
 
 const App = () => {
  const [isGameStarted,setisGameStarted] = useState(false);

  const togleGamePlay=()=>{
    setisGameStarted((prev)=>!prev)
  }
   return (
    <div>
      {isGameStarted?<Gamplay/>:<StartGame togle ={togleGamePlay}/>}
      
     
     </div>
   )
 }
 
 export default App