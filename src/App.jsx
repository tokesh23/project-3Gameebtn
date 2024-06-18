 import React, { useState } from 'react'
 import "./App.css" 
import StartGame from './components/StartGame'
 import GamePlay from './components/GamePlay'
 
 const App = () => {
  const [isGameStarted,setIsGameStarted] = useState(true);

  const togleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
   return (
    <div>
      {isGameStarted?<GamePlay/>:<StartGame toggle = {togleGamePlay}/>}
      
     
     </div>
   )
 }
 
 export default App